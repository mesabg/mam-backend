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
    //console.log("Blog is :: ", Blog.mongoose.models);
    /*let cursor = Blog.model.aggregate([
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
    ]);
    let blog = null;
    let blogs = [];
    while((blog = cursor.next()) != null){
        blogs.push(blog);
    }
    res.json({ Blog: blogs });*/

    Blog.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        var a = [];
        /*for(var i =0;i<items[0].articles.length;i++){
            var article_full;
            //article_full = Articles.model.find({_id:items[0].articles[i]});

            a.push(article_full);
        }*/

        var q = article_query(items[0].articles[0]);

        console.log('FUCK U!');

        res.json({
            Blog: items[0].articles
        });
    });
}
