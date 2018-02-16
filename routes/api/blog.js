var keystone = require('keystone');

var Blog = keystone.list('Blog');
var Articles = keystone.list('Article');

/**
 * List Blog
 */
exports.list = function(req, res) {
    Blog.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        var a = [];
        for(var i =0;i<items[0].articles.length;i++){
            a.push(Articles.model.find().where('_id', items[0].articles[i]));
        }
        res.json({
            Blog: a
        });
    });
}
