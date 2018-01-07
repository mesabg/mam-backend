var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Biography Model
 * ==========
 */
var Biography = new keystone.List('Biography');

Biography.add({
  author: { type: String, required: true },
  authorQuote: { type: Types.Html, wysiwyg: true, height: 150 },
  content: { type: Types.Html, wysiwyg: true, height: 150 },
});


/**
 * Registration
 */
Biography.register();