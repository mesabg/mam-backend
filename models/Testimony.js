var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Testimony Model
 * =============
 */

var Testimony = new keystone.List('Testimony', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Testimony.add({
    name: { type: String, required: true, label: 'Name' },
    author: { type: String, label: 'Author' },
    content: { type: Types.Html, wysiwyg: true, height: 150, label: 'Content' },
	image: { type: Types.CloudinaryImage, label: 'Image' }
});

Testimony.register();