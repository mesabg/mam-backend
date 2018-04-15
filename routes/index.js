/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.enableCors);
keystone.pre('render', middleware.enableCors);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Pass your keystone instance to the module 
//var restful = require('restful-keystone')(keystone);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api'),
	pages: importRoutes('./api/page')
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.all('/terms-and-conditions', routes.views.contact);

	/**
	 * RESTful API Routes
	 */
	app.get('/api/achievements', 	middleware.authenticateUser, routes.api.achievement.list);
	app.get('/api/aptitudes', 		middleware.authenticateUser, routes.api.aptitude.list);
	app.get('/api/questions', 		middleware.authenticateUser, routes.api.question.list);
	app.post('/api/contact', 		middleware.authenticateUser, routes.api.contact.create);


	/**
	 * RESTful API Routes (for pages)
	 */
	app.get('/api/page/404', 		middleware.authenticateUser, routes.pages['404'].get);
	app.get('/api/page/contact', 	middleware.authenticateUser, routes.pages['contact'].get);
	app.get('/api/page/home', 		middleware.authenticateUser, routes.pages['home'].get);
	app.get('/api/page/mam', 		middleware.authenticateUser, routes.pages['mam'].get);
	app.options('/api/page/mam', 	middleware.authenticateUser, function(request, response){ 
		response.status(200);
		response.statusMessage = "Success";
		return response.json({
			statusMessage: response.statusMessage, 
			statusCode: response.statusCode,
			data: null 
		});  
	});
	app.get('/api/page/portfolio',	middleware.authenticateUser, routes.pages['portfolio'].get);


	// API REST
	//app.get('/api/blog', 		routes.api.blog.list);
	//app.get('/api/biography', 	routes.api.biography.list);
	//app.get('/api/instagram', 	routes.api.instagram.list);
	//app.get('/api/question', 	routes.api.question.list);
	app.get('/api/CTA-contact', routes.api.page.list);
	app.get('/api/Highlights', 	routes.api.article.list);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
};
