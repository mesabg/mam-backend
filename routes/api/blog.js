var keystone = require('keystone');

var Blog = keystone.list('Blog');
var Article = keystone.list('Article');

/**
 * List Blog
 */

function article_query(name){
    var query = Article.find({name:name});
    return query;
 }

exports.list = function(req, res) {
    var User = keystone.list('User').model;

    var user = new User({
        name: { first: 'Moisés', last: 'Berenguer' },
        email: 'moises.berenguer@gmail.com',
        password: '123456',
        isAdmin: true
    });

    user.save(function (err) {
        if (err) {
            // handle error
            return console.log(err);
        }

        // user has been saved
        console.log(user);
        console.log("User has been saved");
    });

    Blog.model.aggregate([
        {
            $unwind: "$articles"
        },
        {
            $lookup: {
                from: 'articles',
                localField: 'articles',
                foreignField: '_id',
                as: 'article'
            }
        },
        {
            $unwind: "$article"
        },
        {
            $group: {
                _id: '$_id',
                slug: { $first: '$slug' },
                name: { $first: '$name' },
                __v: { $first: '$__v' },
                articles: { $push: '$article' },
                intro: { $first: '$intro' },
            }
        }
    ])
    .exec(function (err, blogs) {

        if (err) return res.json({
        	error: err
        });

        return res.json({ Blogs: blogs });
    });
    
}
