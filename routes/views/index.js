var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Views
	app.get('/', routes.views.index);

	// API
	app.get('/api/question', routes.api.question.list);
	app.get('/api/question/:id', routes.api.question.get);
	app.post('/api/question', routes.api.question.create);

	// Render the view
	view.render('index');
};
