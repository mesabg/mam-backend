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

var Component = new keystone.List('Component', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	nodelete: true,
});

Component.add({
	title: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
	content: {
		title: { type: Types.Html, wysiwyg: true, height: 150 },
		description: { type: Types.Html, wysiwyg: true, height: 400 },
	}
});

Component.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Component.defaultColumns = 'title, state|20%';
Component.register();