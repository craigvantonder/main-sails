// api/models/User.js

var _ = require('lodash');
var _super = require('sails-permissions/api/models/User');

_.merge(exports, _super);
_.merge(exports, {

    attributes: {
        mobile: 'string',
        landline: 'string',
        category: 'string'
    }

    // Extend with custom logic here by adding additional fields, methods, etc.

});
