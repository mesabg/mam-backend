var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Question Model
 * =============
 */

var Questions = new keystone.List('Question', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Questions.add({
	name: { type: String, required: true},
	question: { type: Types.Html, wysiwyg: true, height: 150 },
	answer: { type: Types.Html, wysiwyg: true, height: 150 },
});

Questions.relationship({ ref: 'ContactPage', path: 'contact-pages', refPath: 'questions' });

Questions.register();