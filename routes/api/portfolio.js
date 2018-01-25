var keystone = require('keystone');

var Portfolio = keystone.list('Portfolio');

/**
 * List Portfolio
 */
exports.list = function(req, res) {
    Portfolio.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        res.json({
            portfolio: items
        });
    });
}
