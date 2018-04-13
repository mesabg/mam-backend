var keystone = require('keystone');

var Page = keystone.list('Page');

/**
 * GET Portafolio
 */
exports.get = function (req, res) {
    Page.model.aggregate([
        {
            $match: { slug: 'portafolio' }
        },
        {
            $limit: 1
        }
    ])
    .exec(function (err, page) {
        if (err) return res.json({error: err});
        return res.json(page[0]);
    });
}
