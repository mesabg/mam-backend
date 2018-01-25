var keystone = require('keystone');

var Article = keystone.list('Article');

/**
 * List Article
 */
exports.list = function(req, res) {
    Article.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        res.json({
            article: items
        });
    });
}
