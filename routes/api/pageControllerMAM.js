var keystone = require('keystone');

var Page = keystone.list('Page');

/**
 * List Pages
 */
exports.list = function (req, res) {
    Page.model.aggregate([
        {
            $match: { slug: 'miguel-angel-martinez' }
        }
    ])
    .exec(function (err, page) {
        if (err) return res.json({error: err});
        return res.json(page);
    });
}
