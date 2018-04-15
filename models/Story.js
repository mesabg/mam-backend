var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Story Model
 * =============
 */

var Story = new keystone.List('Story', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Story.add({
	name: { type: String, required: true, label: 'Name' },
	image: {
		main: { type: Types.CloudinaryImage, label: 'Main Image' },
		secondary: { type: Types.CloudinaryImages, label: 'Secondary Images' },
	},
	location: { type: String },
	content: {
		description: { type: Types.Html, wysiwyg: true, height: 400, label: 'Description' },
	},
	outstanding: { type: Types.Boolean, label: 'Outstanding' },
	visibleOnPortfolio: { type: Types.Boolean, label: 'Visible on portfolio' }
});

Story.register();

/**
 * contentBlocks: { type: Types.Relationship, ref: 'ContentBlock', many: true, createInline: true },
	blogPosition: { 
        type: Types.Select, 
        numeric: true, 
        options: [
			{ value: 1, label: 'Center' }, 
			{ value: 2, label: 'Left' },
			{ value: 3, label: 'Right' },
		] 
	},
	carouselVisible: { type: Types.Boolean }
 */