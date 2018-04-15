var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contact Model
 * =============
 */

var Contact = new keystone.List('Contact', {
    autokey: { path: 'slug', from: 'name', unique: true },
    nocreate: true
});

Contact.add({
    nameAndLastName: { type: String },
    email: { type: String },
    SocialNetwork: { type: String },
    locationChurch: { type: String },
    numInvited: { type: String },
    phone: { type: String },
    dateWedding: { type: Date },
    locationReception: { type: String },
    details: { type: String }
});

Contact.register();