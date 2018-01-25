var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * BlogArticle Model
 * =============
 */

var BlogArticle = new keystone.List('BlogArticle', {
	autokey: { from: 'name', path: 'key', unique: true },
});

BlogArticle.add({
	name: { type: String, required: true },
    main: { type: Types.CloudinaryImage },
	location: { type: String, required: true },
});

BlogArticle.register();