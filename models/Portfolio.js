var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Portfolio Model
 * =============
 */

var Portfolio = new keystone.List('Portfolio', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Portfolio.add({
	name: { type: String, required: true },
    banner: { type: Types.CloudinaryImage },
    mini: { type: Types.CloudinaryImage },
	testimony: { type: Types.Html, wysiwyg: true, height: 150 },
	author: { type: String, required: true },
});

Portfolio.register();