var keystone = require('keystone');

var Aptitude = keystone.list('Aptitude');

/**
 * List Aptitude
 */
exports.list = function (request, response) {
    Aptitude.model.find(function (error, aptitudes) {
        try {
            if (error) {
                console.error("[GET] /api/aptitudes [%s]", error.message);
                throw new Error("An error occured while retrieving aptitudes data");
            }
            response.status(200);
            response.statusMessage = "Success";
            return response.json({
                statusMessage: response.statusMessage, 
                statusCode: response.statusCode,
                data: aptitudes 
            });
                
        } catch (error) {
            response.status(500);
            response.statusMessage = error.message;
            return response.json({
                statusMessage: response.statusMessage, 
                statusCode: response.statusCode,
                data: null 
            });
        }
    });
}