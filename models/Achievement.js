var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Achievement
 * @param {String} name
 * @param {CloudinaryImage} image
 * @param {Html} content
 * =======================
 */

var Achievements = new keystone.List('Achievement', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Achievements.add({
	name: { type: String, required: true},
	image: { type: Types.CloudinaryImage },
	content: { type: Types.Html, wysiwyg: true, height: 150 },
});

Achievements.register();