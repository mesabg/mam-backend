var keystone = require('keystone');

var Instagram = keystone.list('Instagram');

/**
 * List Instagram
 */
exports.list = function(req, res) {
    Instagram.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        res.json({
            Instagram: items
        });
    });
}
