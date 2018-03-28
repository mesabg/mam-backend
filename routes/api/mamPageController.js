var keystone = require('keystone');

var Page = keystone.list('Page');

/**
 * List Pages
 */
exports.list = function (req, res) {
    Page.model.aggregate([
        {
            $match: { slug: 'miguel-angel-martinez' }
        },
        {
            $unwind: "$achievements"
        },
        {
            $lookup: {
                from: 'achievements',
                localField: 'achievements',
                foreignField: '_id',
                as: 'achievement'
            }
        },
        {
            $unwind: "$achievement"
        },
        {
            $group: {
                _id: '$_id',
                slug: { $first: '$slug' },
                title: { $first: '$title' },
                state: { $first: '$state' },
                banner: { $first: '$banner' },
                content: { $first: '$content' },
                publishedDate: { $first: '$publishedDate' },
                achievements: { $push: '$achievement' },
                aptitudes: { $first: '$aptitudes' },
            }
        },
        {
            $unwind: "$aptitudes"
        },
        {
            $lookup: {
                from: 'aptitudes',
                localField: 'aptitudes',
                foreignField: '_id',
                as: 'aptitude'
            }
        },
        {
            $unwind: "$aptitude"
        },
        {
            $group: {
                _id: '$_id',
                slug: { $first: '$slug' },
                title: { $first: '$title' },
                state: { $first: '$state' },
                banner: { $first: '$banner' },
                content: { $first: '$content' },
                publishedDate: { $first: '$publishedDate' },
                achievements: { $first: '$achievements' },
                aptitudes: { $push: '$aptitude' },
            }
        }
    ])
        .exec(function (err, page) {

        if (err) return res.json({
            error: err
        });

        return res.json(page);
    });
}
