var keystone = require('keystone');

var Blog = keystone.list('Blog');
var Articles = keystone.list('Article');

/**
 * List Blog
 */
exports.list = function(req, res) {
    Blog.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        var a = 4;
        for(var i =0;i<4;i++){
            a = a*4;
        }
        res.json({
            Blog: items
        });
    });
}
