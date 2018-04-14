var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Aptitude
 * @param {String} name
 * @param {CloudinaryImage} image
 * @param {Html} content
 * =======================
 */

var Aptitude = new keystone.List('Aptitude', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Aptitude.add({
	name: { type: String, required: true},
	image: { type: Types.CloudinaryImage },
	content: { type: Types.Html, wysiwyg: true, height: 150 },
});

Aptitude.register();