var keystone = require('keystone');

var Blog = keystone.list('Blog');
var Articles = keystone.list('Article');

/**
 * List Blog
 */
exports.list = function(req, res) {
    Blog.model.find(function(err, items) {
        if (err) return res.json({ err: err });

        var articles;
        
        for(var i=0; i < length(items[0].articles) ;i++){
            articles.push(
                Articles.model.find().where('_id', items[0].articles[i]).exec(function(errpost, article) {})
            );
        }

        res.json({
            Blog: articles
        });
    });
}
