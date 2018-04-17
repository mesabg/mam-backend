var keystone = require('keystone');

var Component = keystone.list('Component');

/**
 * GET Footer
 */
exports.get = function (request, response) {
    Component.model.aggregate([
        {
            $match: { slug: 'footer' }
        },
        {
            $project: {
                _id: 1,
                title: 1,
                slug: 1,
                description: "$content.title"
            }
        }, 
        {
            $limit: 1
        }
    ])
    .exec(function (error, components) {
        try {
            if (error) {
                console.error("[GET] /api/component/footer [%s]", error.message);
                throw new Error("An error occured while retrieving component data");
            }
            response.status(200);
            response.statusMessage = "Success";
            return response.json({
                statusMessage: response.statusMessage, 
                statusCode: response.statusCode,
                data: components[0] 
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
