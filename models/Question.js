var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Question Model
 * @param {String} name
 * @param {String} question
 * @param {String} answer
 * =======================
 */

var Question = new keystone.List('Question', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Question.add({
	name: { type: String, required: true, label: 'Name' },
	question: { type: Types.Html, wysiwyg: true, height: 150, label: 'Question' },
	answer: { type: Types.Html, wysiwyg: true, height: 150, label: 'Answer' },
});

Question.register();