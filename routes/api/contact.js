var keystone = require('keystone');
var Blog = keystone.list('Blog');
var Article = keystone.list('Article');

/**
 * Add contact
 */
exports.create = async function (request, response) {
    let data = request.body;
    nameAndLastName
    email
    phone
    SocialNetwork
    dateWedding
    locationChurch
    locationReception
    numInvited
    details

    let emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    try {
        //-- Check integrity
        if (data.nameAndLastName.length === 0) throw new Error("Name and Last name must be defined");
        if (data.email.length === 0 || !emailValidator.test(data.email)) throw new Error("Email must be defined");
        if (data.SocialNetwork.length === 0) throw new Error("Social network must be defined");
        if (data.locationChurch.length === 0) throw new Error("Location Church must be defined");
        if (parseInt(data.numInvited) <= 0) throw new Error("Number of invited must be a positive integer");

        //-- Non necesary values
        data.phone = data.phone || null;
        data.dateWedding = data.dateWedding || null;
        data.locationReception = data.locationReception || null;
        data.details = data.details || null;

    } catch (error) {
        
    }
}
