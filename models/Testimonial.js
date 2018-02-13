var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Testimonial Model
 * =============
 */

var Testimonials = new keystone.List('Testimonial', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Testimonials.add({
    name: { type: String, required: true},
    author: { type: String },
    content: { type: Types.Html, wysiwyg: true, height: 150 },
	image: { type: Types.CloudinaryImage },
});

Testimonials.relationship({ ref: 'TestimonialCarousel', path: 'testimonialCarousels', refPath: 'testimonials' });
Testimonials.relationship({ ref: 'Portfolio', path: 'portfolios', refPath: 'testimonials' });

Testimonials.register();