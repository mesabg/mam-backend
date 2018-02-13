var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Article Model
 * =============
 */

var Article = new keystone.List('Article', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Article.add({
	name: { type: String, required: true },
    banner: { type: Types.CloudinaryImage },
	location: { type: String},
	mainText: { type: String},
	contentBlocks: { type: Types.Relationship, ref: 'ContentBlock', many: true, createInline: true },
	/*fieldA: { type: Types.Relationship, ref: 'Aptitude', many:true, createInline: true },
	type:{ type: Types.Select, numeric: true, options: [
		{ value: 1, label: '1 Image' }, 
		{ value: 2, label: '2 Images' },
		{ value: 3, label: '3 Images' },
		{ value: 4, label: 'Image with left text' },
		{ value: 5, label: 'Image with right text' },
		{ value: 6, label: 'Image with text above' },
		{ value: 7, label: 'Only text' }
	]},*/
	carouselVisible: { type: Types.Boolean },
	testimonialCarousel: { type: Types.Relationship, ref: 'TestimonialCarousel', many: false, createInline: true },
});

Article.relationship({ ref: 'Blog', path: 'blogs', refPath: 'articles' });
Article.relationship({ ref: 'Portfolio', path: 'portfolios', refPath: 'articles' });

Article.register();