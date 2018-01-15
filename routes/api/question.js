var keystone = require('keystone');

var Question = keystone.list('Question');

/**
 * List Question
 */
exports.list = function(req, res) {
    Question.model.find(function(err, items) {
        if (err) return res.json({ err: err });
        res.json({
            question: items
        });
    });
}

/**
 * Get Question by ID
 */
/*exports.get = function(req, res) {
    Question.model.findById(req.params.id).exec(function(err, item){
        if (err) return res.json({ err: err });
        if (!item) return res.json('not found');

        res.json({
            question: item
        });

    });
}*/


/**
 * Create a Question
 */
/*exports.create = function(req, res) {
    var item = new Question.model(),
    data = (req.method == 'POST') ? req.body : req.query;

    item.getUpdateHandler(req).process(data, function(err) {
        if (err) return res.json({ error: err });
        res.json({
            question: item
        });
    });
}*/
