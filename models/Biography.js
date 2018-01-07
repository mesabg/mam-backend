var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Biography Model
 * =============
 */

var Biography = new keystone.List('Biography', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Biography.add({
	name: { type: String, required: true },
	banner: { type: Types.CloudinaryImage },
	authorQuote: { type: Types.Html, wysiwyg: true, height: 150 },
	content: { type: Types.Html, wysiwyg: true, height: 400 },
	aptitudes: { type: Types.Relationship, ref: 'Aptitude', many: true },
});

Biography.register();
