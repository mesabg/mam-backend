var keystone = require('keystone');

var Question = keystone.list('Question');

/**
 * List Question
 */
exports.list = function(request, response) {
    Question.model.find(function(error, questions) {
        try {
            if (error) {
                console.error("[GET] /api/questions [%s]", error.message);
                throw new Error("An error occured while retrieving questions data");
            }
            response.status(200);
            response.statusMessage = "Success";
            return response.json({
                statusMessage: response.statusMessage, 
                statusCode: response.statusCode,
                data: questions 
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