var keystone = require('keystone');

var Story = keystone.list('Story');

/**
 * Outstanding Stories
 */
exports.outstanding = function(request, response) {
    try {
        let page = parseInt(request.query.page);
        let limit = parseInt(request.query.limit);

        let aggregateQuery = [
            {
                $match: { outstanding: true }
            },
            {
                $project: {
                    _id: 1,
                    slug: 1,
                    title: 1,
                    image: "$image.main",
                    location: 1,
                    description: "$content.description"
                }
            }
        ];

        if (page != undefined && page != null && !isNaN(page) && limit != undefined && limit != null && !isNaN(limit)) {
            if (page >= 1 && limit >= 1){
                aggregateQuery.push({ $skip: limit * (page-1) });
                aggregateQuery.push({ $limit: limit });
            }
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
                data: stories 
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




/**
 * Portfolio Stories
 */
exports.portfolio = function(request, response) {
    try {
        let page = parseInt(request.query.page);
        let limit = parseInt(request.query.limit);

        let aggregateQuery = [
            {
                $match: { visibleOnPortfolio: true }
            },
            {
                $project: {
                    _id: 1,
                    slug: 1,
                    title: 1,
                    image: "$image.main",
                    location: 1,
                    description: "$content.description"
                }
            }
        ];

        if (page != undefined && page != null && !isNaN(page) && limit != undefined && limit != null && !isNaN(limit)) {
            if (page >= 1 && limit >= 1){
                aggregateQuery.push({ $skip: limit * (page-1) });
                aggregateQuery.push({ $limit: limit });
            }
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
                data: stories 
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




/**
 * Single Story
 */
exports.single = function(request, response) {
    try {
        let slug = request.query.slug;
        if (!slug) throw new Error("Slug must be defined");

        /**
         * Execute query
         */
        Story.model.aggregate([
            {
                $match: { slug: slug }
            },
            {
                $limit: 1
            },
            {
                $project: {
                    _id: 1,
                    slug: 1,
                    title: 1,
                    image: 1,
                    location: 1,
                    description: "$content.description",
                    testimonies: 1
                }
            },
            {
                $unwind: "$testimonies"
            },
            {
                $lookup: {
                    from: 'stories',
                    localField: 'testimonies',
                    foreignField: '_id',
                    as: 'testimony'
                }
            },
            {
                $unwind: "$testimony"
            },
            {
                $group: {
                    _id: '$_id',
                    slug: { $first: '$slug' },
                    title: { $first: '$title' },
                    image: { $first: '$image' },
                    location: { $first: '$location' },
                    description: { $first: '$description' },
                    testimonies: { $push: '$testimony' },
                }
            }
        ])
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
                data: stories ? stories[0] : null
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