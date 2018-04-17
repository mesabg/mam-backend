var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Page
 * @param {String} title
 * @param {String} state
 * @param {Date} publishedDate
 * @param {CloudinaryImage} banner
 * @param {title, description} content
 * ==================================
 */

var Page = new keystone.List('Page', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	nodelete: true,
	nocreate: true
});

Page.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	banner: { type: Types.CloudinaryImage },
	content: {
		title: { type: Types.Html, wysiwyg: true, height: 150 },
		description: { type: Types.Html, wysiwyg: true, height: 400 },
	}
});

Page.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Page.defaultColumns = 'title, state|20%';
Page.register();