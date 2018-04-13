var keystone = require('keystone');
var nodemailer = require('nodemailer');
var Contact = keystone.list('Contact');

/**
 * Add contact
 */
exports.create = async function (request, response) {
    //-- Aux variables
    let data = request.body;
    let emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    try {
        //-- Check integrity
        if (!data.nameAndLastName) throw new Error("Name and Last name must be defined");
        if (data.nameAndLastName.length === 0) throw new Error("Name and Last name cannot be empty");
        if (!data.email) throw new Error("Email must be defined");
        if (data.email.length === 0 || !emailValidator.test(data.email)) throw new Error("Email cannot be empty");
        if (!data.SocialNetwork) throw new Error("Social network must be defined");
        if (data.SocialNetwork.length === 0) throw new Error("Social network cannot be empty");
        if (!data.locationChurch) throw new Error("Location Church must be defined");
        if (data.locationChurch.length === 0) throw new Error("Location Church cannot be empty");
        if (parseInt(data.numInvited) <= 0) throw new Error("Number of invited must be a positive integer");

        //-- Non necesary values
        data.phone = data.phone || null;
        data.dateWedding = data.dateWedding || null;
        data.locationReception = data.locationReception || null;
        data.details = data.details || null;

        //-- Save data into NON editable post in DB
        let newContact = new Contact.model(data);
        newContact.save(function(error){
            if (error) {
                response.status(200);
                return response.json({
                    statusMessage: response.statusMessage,
                    statusCode: response.statusCode,
                    data: null
                });
            } else console.log("Contact saved succesfully");
        });
        
        //-- Send an email
        nodemailer.createTestAccount((err, account) => {
            let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: {
                    user: account.user, // generated ethereal user
                    pass: account.pass // generated ethereal password
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: 'bar@example.com, baz@example.com', // list of receivers
                subject: 'Hello ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: '<b>Hello world?</b>' // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });

        //-- Return response
        response.status(200);
        response.json({
            statusMessage: response.statusMessage,
            statusCode: response.statusCode,
            data: null
        });

    } catch (error) {
        console.log("An error occurred :: ", error);
        response.status(500);
        response.json({
            statusMessage: error,
            statusCode: response.statusCode,
            data: null
        });
    }
}
