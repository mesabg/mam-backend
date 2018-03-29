var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contact Model
 * =============
 */

var Contact = new keystone.List('Contact', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Contact.add({
    nameAndLastName: { type: String, required: true},
    email: { type: String, required: true },
    SocialNetwork: { type: String, required: true },
    locationChurch: { type: String, required: true },
    numInvited: { type: String, required: true },
    phone: { type: String },
    dateWedding: { type: Date },
    locationReception: { type: String },
    details: { type: String }
});

Contact.register();