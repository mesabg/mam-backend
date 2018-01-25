var keystone = require('keystone');

var page = keystone.list('page');

/**
 * List page
 */
exports.list = function(req, res) {
    page.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        res.json({
            page: items
        });
    });
}
