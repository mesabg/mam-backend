var keystone = require('keystone');

var Blog = keystone.list('Blog');
var Articles = keystone.list('Article');

/**
 * List Blog
 */
exports.list = async function(request, response) {
    console.log("Blog is :: ", Blog);
    /*let blogs = await Blog.model.aggregate([
        {
            $unwind: "$items"
        },
        {
            $unwind: "$items.articles"
        },
        {
            $lookup: {
                from: 'articles',
                localField: 'items.articles',
                foreignField: '_id',
                as: 'article'
            }
        },
        {
            $project: {
                _id: 0,
                article: "$article"
            }
        }
    ]).toArray();*/
    response.json({ Blog: "" });

    /*Blog.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        var a = [];
        for(var i =0;i<items[0].articles.length;i++){
            var article_full;
            Articles.model.find().where('_id', items[0].articles[i]).exec(function(errpost, article) {article_full = items[0].articles[i];})
            a.push(article_full);
        }
        res.json({
            Blog: a
        });
    });*/
}
