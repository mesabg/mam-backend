var keystone = require('keystone');

var Story = keystone.list('Story');

/**
 * Outstanding Stories
 */
exports.outstanding = function(request, response) {
    try {
        let page = request.params.page;
        let limit = request.params.limit;

        let aggregateQuery = [
            {
                $match: { outstanding: true }
            },
            {
                $project: {
                    _id: 1,
                    slug: 1,
                    title: 1,
                    image: 1,
                }
            }
        ];

        if (page && limit) {
            aggregateQuery.push({ $skip: limit * page });
            aggregateQuery.push({ $limit: limit });
        }

        /**
         * Execute query
         */
        Story.model.aggregate(aggregateQuery)
        .exec(function (error, stories) {

            if (error) {
                response.status(500);
                response.statusMessage = error.message;
                return response.json({
                    statusMessage: response.statusMessage, 
                    statusCode: response.statusCode,
                    data: null 
                });
            }

            response.status(200);
            response.statusMessage = "Success";
            return response.json({
                statusMessage: response.statusMessage, 
                statusCode: response.statusCode,
                data: questions 
            });
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
}