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
        
        for(var i=0; i < items[0].articles.length ;i++){

            articles.push(
                'holis'
            );
        }

        res.json({
            Blog: articles
        });
    });
}
