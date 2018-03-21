var keystone = require('keystone');

var Blog = keystone.list('Blog');
var Article = keystone.list('Article');

/**
 * List Blog
 */

function article_query(name){
    var query = Article.find({name:name});
    return query;
 }

exports.list = function(req, res) {
    let cursor = Blog.model.aggregate([
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
    ]).toArray();
    res.json({ Blog: blogs });

    /*Blog.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        var a = [];
        for(var i =0;i<items[0].articles.length;i++){
            var article_full;
            //article_full = Articles.model.find({_id:items[0].articles[i]});

            a.push(article_full);
        }

        var q = article_query(items[0].articles[0]);

        console.log('FUCK U!');

        res.json({
            Blog: items[0].articles
        });
    });*/
}
