const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');



mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  videoID: { type: String, maxLength: 255 },
  slug: { type: String, slug: 'name' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  courseprice: { type: String, maxLength: 600 },
});

module.exports = mongoose.model('Course', Course);




