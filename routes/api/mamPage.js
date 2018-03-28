var keystone = require('keystone');

var MamPage = keystone.list('MamPage');

/**
 * List Blog
 */

function article_query(name) {
    var query = Article.find({ name: name });
    return query;
}

exports.list = function (req, res) {
    MamPage.model.aggregate([
        {
            $unwind: "$articles"
        },
        {
            $lookup: {
                from: 'articles',
                localField: 'articles',
                foreignField: '_id',
                as: 'article'
            }
        },
        {
            $unwind: "$article"
        },
        {
            $group: {
                _id: '$_id',
                slug: { $first: '$slug' },
                name: { $first: '$name' },
                __v: { $first: '$__v' },
                articles: { $push: '$article' },
                intro: { $first: '$intro' },
            }
        }
    ])
    .exec(function (err, blogs) {

        if (err) return res.json({
            error: err
        });

        return res.json({ Blogs: blogs });
    });
}
