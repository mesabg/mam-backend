var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Testimonial Carousel Model
 * =============
 */

var TestimonialCarousel = new keystone.List('TestimonialCarousel', {
	autokey: { from: 'name', path: 'key', unique: true },
	nocreate: true,
});

TestimonialCarousel.add({
	name: { type: String, required: true },
	testimonials: { type: Types.Relationship, ref: 'Testimonial', many: true, createInline: true  },
});

TestimonialCarousel.relationship({ ref: 'Article', path: 'articles', refPath: 'testimonialCarousel' });

TestimonialCarousel.register();
