var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Photo Block Model
 * =============
 */

var PhotoBlock = new keystone.List('PhotoBlock', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

PhotoBlock.add({
	name: { type: String, required: true},
	type: { 
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
	content: { type: Types.CloudinaryImages },
});

PhotoBlock.relationship({ ref: 'Article', path: 'articles', refPath: 'photoBlocks' });

PhotoBlock.register();