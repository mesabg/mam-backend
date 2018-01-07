var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Achievement Model
 * =============
 */

var Achievements = new keystone.List('Achievement', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Achievements.add({
	name: { type: String, required: true},
	image: { type: Types.CloudinaryImage },
	content: { type: Types.Html, wysiwyg: true, height: 150 },
});

Achievements.relationship({ ref: 'Biography', path: 'biographies', refPath: 'achievements' });

Achievements.register();