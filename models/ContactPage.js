var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contact Page Model
 * =============
 */

var ContactPage = new keystone.List('ContactPage', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ContactPage.add({
    name: { type: String, required: true },
    banner: { type: Types.CloudinaryImage },
    content: { type: Types.Html, wysiwyg: true, height: 250 },
    formIntroduction: { type: Types.Html, wysiwyg: true, height: 150 },
    questions: { type: Types.Relationship, ref: 'Question', many: true },
    endingNote: { type: Types.Html, wysiwyg: true, height: 100 },
    email: { type: Types.Email, required: true, default: 'mam-admin@gmail.com' },
});

ContactPage.register();
