var keystone = require('keystone');

var Blog = keystone.list('Blog');

/**
 * List Blog
 */
exports.list = function(req, res) {
    Blog.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        res.json({
            Blog: items[0].articles
        });
    });
}
