var keystone = require('keystone');

var Achievement = keystone.list('Achievement');

/**
 * List Achievement
 */
exports.list = function (req, res) {
    Achievement.model.find(function (err, items) {
        if (err) return res.json({ err: err });
        res.json(items);
    });
}