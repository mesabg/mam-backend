var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Question Model
 * =============
 */

var Question = new keystone.List('Question', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Question.add({
	name: { type: String, required: true},
	question: { type: Types.Html, wysiwyg: true, height: 150 },
	answer: { type: Types.Html, wysiwyg: true, height: 150 },
});

Question.relationship({ ref: 'ContactPage', path: 'contact-pages', refPath: 'questions' });

Question.register();