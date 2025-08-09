const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  original_url: { type: String, required: true },
  short_code: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Url', UrlSchema);
