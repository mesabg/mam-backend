var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Portfolio Model
 * =============
 */

var Portfolio = new keystone.List('Portfolio', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Portfolio.add({
	name: { type: String, required: true },
    banner: { type: Types.CloudinaryImages },
	//mini: { type: Types.CloudinaryImage },
	testimonials: { type: Types.Relationship, ref: 'Testimonial', many: false, createInline: true },
	articles: { type: Types.Relationship, ref: 'Article', many: false, createInline: true },
});

Portfolio.register();