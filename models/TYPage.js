var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Thank You Page Model
 * =============
 */

var TYPage = new keystone.List('TYPage', {
	autokey: { from: 'title', path: 'key', unique: true },
	nocreate: true,
});

TYPage.add({
    title: { type: String, required: true },
    content: { type: String},
    buttonText: { type: String},
	buttonURL: { type: Types.Url},
});

TYPage.register();
