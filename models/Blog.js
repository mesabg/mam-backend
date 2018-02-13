var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Blog Model
 * =============
 */

var Blog = new keystone.List('Blog', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Blog.add({
	name: { type: String, required: true},
    intro: { type: Types.Html, wysiwyg: true, height: 150 },
    articles: { type: Types.Relationship, ref: 'Article', many: false, createInline: true },
});

Blog.register();