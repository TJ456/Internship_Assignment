import Url from "../models/Url.js";
import { generateShortCode } from "../utils/generateShortCode.js";
import validUrl from "valid-url";

// Create shortened URL
export const shortenUrl = async (req, res, next) => {
  try {
    const { originalUrl } = req.body;

    if (!validUrl.isUri(originalUrl)) {
      return res.status(400).json({ message: "Invalid original URL" });
    }

    let url = await Url.findOne({ originalUrl });

    if (url) {
      return res.json({ shortUrl: `${process.env.BASE_URL}/${url.shortCode}` });
    }

    const shortCode = generateShortCode();
    const newUrl = await Url.create({ originalUrl, shortCode });

    res.status(201).json({ shortUrl: `${process.env.BASE_URL}/${shortCode}` });
  } catch (error) {
    next(error);
  }
};

// Redirect short URL to original
export const redirectUrl = async (req, res, next) => {
  try {
    const { shortcode } = req.params;
    const url = await Url.findOne({ shortCode: shortcode });

    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }

    url.clicks++;
    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    next(error);
  }
};

// Admin: Get all URLs with click counts
export const getAllUrls = async (req, res, next) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 });
    res.json(urls);
  } catch (error) {
    next(error);
  }
};
