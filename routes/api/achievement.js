var keystone = require('keystone');

var Achievement = keystone.list('Achievement');

/**
 * Retrieve all achievements
 */
exports.list = function (request, response) {
    Achievement.model.find(function (error, achievements) {
        try {
            if (error) throw new Error("An error occured while retrieving achievements data");
            resopnse.status(200);
            response.statusMessage = "Success";
            return response.json({
                statusMessage: response.statusMessage, 
                statusCode: response.statusCode,
                data: achievements 
            });
                
        } catch (error) {
            resopnse.status(500);
            response.statusMessage = error.message;
            return response.json({
                statusMessage: response.statusMessage, 
                statusCode: response.statusCode,
                data: null 
            });
        }
    });
}