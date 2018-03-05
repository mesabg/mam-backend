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

exports.get = function(req, res){
    Article.model.findById(req.params.id).exec(function(err, item) {
        if (err) return res.json({ err: err });
        if (!item) return res.json('not found');
    
        res.json({
            article: item
        });
    });
}
