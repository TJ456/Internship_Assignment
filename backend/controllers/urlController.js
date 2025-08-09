const shortid = require('shortid');
const Url = require('../models/Url');

exports.createShortUrl = async (req, res) => {
  const { original_url } = req.body;
  if (!original_url) return res.status(400).json({ error: "URL is required" });

  const short_code = shortid.generate();
  const newUrl = await Url.create({ original_url, short_code });
  res.json({ shortUrl: `${process.env.BASE_URL}/${short_code}` });
};

exports.redirectUrl = async (req, res) => {
  const { shortcode } = req.params;
  const urlData = await Url.findOne({ short_code: shortcode });

  if (!urlData) return res.status(404).json({ error: "Not found" });

  urlData.clicks++;
  await urlData.save();

  res.redirect(urlData.original_url);
};
