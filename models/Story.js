var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Story
 * =============
 */

var Story = new keystone.List('Story', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Story.add({
    name: { type: String, required: true },
    banner: { type: Types.CloudinaryImage },
    intro: { type: Types.Html, wysiwyg: true, height: 150 },
    articles: { type: Types.Relationship, ref: 'Article', many: true, createInline: true },
});

Story.register();