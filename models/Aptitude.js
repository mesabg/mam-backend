var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Aptitude Model
 * =============
 */

var Aptitude = new keystone.List('Aptitude', {
	autokey: { from: 'title', path: 'key', unique: true },
});

Aptitude.add({
	title: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
	content: { type: Types.Html, wysiwyg: true, height: 150 },
});

Aptitude.relationship({ ref: 'Biography', path: 'biography', refPath: 'aptitudes' });

Aptitude.register();