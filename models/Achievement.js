var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Achievement Model
 * =============
 */

var Achievement = new keystone.List('Achievement', {
	autokey: { from: 'title', path: 'key', unique: true },
});

Achievement.add({
	title: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
	content: { type: Types.Html, wysiwyg: true, height: 150 },
});

Achievement.relationship({ ref: 'Biography', path: 'biography', refPath: 'achievements' });

Achievement.register();