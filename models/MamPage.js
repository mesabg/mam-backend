var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Mam Page
 * =============
 */

var MamPage = new keystone.List('Blog', {
    autokey: { path: 'slug', from: 'name', unique: true },
});

MamPage.add({
    title: { type: String, required: true },
    description: { type: Types.Html, wysiwyg: true, height: 150 },
    banner: { type: Types.CloudinaryImage },
    achievemets: { type: Types.Relationship, ref: 'Achievement', many: true, createInline: true },
    aptitudes: { type: Types.Relationship, ref: 'Aptitude', many: true, createInline: true },
});

MamPage.register();