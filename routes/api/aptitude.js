var keystone = require('keystone');

var Aptitude = keystone.list('Aptitude');

/**
 * List Aptitude
 */
exports.list = function (req, res) {
    Aptitude.model.find(function (err, items) {
        if (err) return res.json({ err: err });
        res.json(items);
    });
}