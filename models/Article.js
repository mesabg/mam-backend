var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Article Model
 * =============
 */

var Article = new keystone.List('Article', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Article.add({
	name: { type: String, required: true },
    main: { type: Types.CloudinaryImage },
	location: { type: String},
});

Article.register();