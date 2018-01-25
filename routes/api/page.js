var keystone = require('keystone');

var Page = keystone.list('Page');

/**
 * List Page
 */
exports.list = function(req, res) {
    Page.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        res.json({
            page: items
        });
    });
}
