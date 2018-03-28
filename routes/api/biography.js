var keystone = require('keystone');

var Biography = keystone.list('Biography');

/**
 * List Biography
 */
exports.list = function(req, res) {
    Biography.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        res.json({
            biography: items
        });
    });
}
