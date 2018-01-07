var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Thank You Page Model
 * =============
 */

var ThankYouPage = new keystone.List('ThankYouPage', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ThankYouPage.add({
    name: { type: String, required: true },
    content: { type: String},
    buttonText: { type: String},
	buttonURL: { type: Types.Url},
});

ThankYouPage.register();
