var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Instagram Account Model
 * =============
 */

var Instagram = new keystone.List('Instagram', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Instagram.add({
    name: { type: String, required: true},
    account: { type: Types.Text }
});

Instagram.register();