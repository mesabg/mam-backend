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
	name: { type: String, required: true, label: 'Name' },
	image: {
		main: { type: Types.CloudinaryImage, label: 'Main Image' },
		secondary: { type: Types.CloudinaryImages, label: 'Secondary Images' },
	},
	location: { type: String },
	content: {
		description: { type: Types.Html, wysiwyg: true, height: 400, label: 'Description' },
	},
	contentBlocks: { type: Types.Relationship, ref: 'ContentBlock', many: true, createInline: true },
	blogPosition: { 
        type: Types.Select, 
        numeric: true, 
        options: [
			{ value: 1, label: 'Center' }, 
			{ value: 2, label: 'Left' },
			{ value: 3, label: 'Right' },
		] 
	},
	carouselVisible: { type: Types.Boolean },
	testimonialCarousel: { type: Types.Relationship, ref: 'TestimonialCarousel', many: false, createInline: true },
});

Article.relationship({ ref: 'Blog', path: 'blogs', refPath: 'articles' });
Article.relationship({ ref: 'Portfolio', path: 'portfolios', refPath: 'articles' });

Article.register();