var keystone = require('keystone');

var Page = keystone.list('Page');

/**
 * GET 404
 */
exports.get = function (request, response) {
    Page.model.aggregate([
        {
            $match: { slug: '404' }
        },
        {
            $limit: 1
        }
    ])
    .exec(function (error, page) {
        try {
            if (error) {
                console.error("[GET] /api/page/404 [%s]", error.message);
                throw new Error("An error occured while retrieving page data");
            }
            response.status(200);
            response.statusMessage = "Success";
            return response.json({
                statusMessage: response.statusMessage, 
                statusCode: response.statusCode,
                data: page[0] 
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
