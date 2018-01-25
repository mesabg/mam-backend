var keystone = require('keystone');

var BlogArticle = keystone.list('BlogArticle');

/**
 * List BlogArticle
 */
exports.list = function(req, res) {
    BlogArticle.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        res.json({
            blogarticle: items
        });
    });
}
