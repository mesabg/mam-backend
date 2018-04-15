var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Photo Block Model
 * =============
 */

var ContentBlock = new keystone.List('ContentBlock', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

ContentBlock.add({
	name: { type: String, required: true},
	class: { 
        type: Types.Select, 
        numeric: true, 
        options: [
                    { value: 1, label: '1 Photo' }, 
                    { value: 2, label: '2 Photos' },
                    { value: 3, label: '3 Photos' },
                    { value: 4, label: 'Photo with text on the right' },
                    { value: 5, label: 'Photo with text on the left' },
                    { value: 6, label: 'Photo with text over it' },
                    { value: 7, label: 'Only text' },
                ] 
        },
    fullWidth: { type: Types.Boolean },
    text: { type: Types.Html, wysiwyg: true, height: 150 },
	images: { type: Types.CloudinaryImages },
});

//ContentBlock.relationship({ ref: 'Article', path: 'articles', refPath: 'contentBlocks' });

ContentBlock.register();