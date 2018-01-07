var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Aptitude Model
 * =============
 */

var Aptitude = new keystone.List('Aptitude', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Aptitude.add({
	name: { type: String, required: true},
	image: { type: Types.CloudinaryImage },
	content: { type: Types.Html, wysiwyg: true, height: 150 },
});

//Aptitude.relationship({ ref: 'Biography', path: 'biography', refPath: 'aptitudes' });

Aptitude.register();