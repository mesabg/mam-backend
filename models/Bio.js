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
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
});

Biography.register();
