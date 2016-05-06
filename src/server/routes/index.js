var User = require('../controller/user');

module.exports = function (app) {
    app.get('/' , require('./route').get);
    
    app.post('/api/registration/', User.setNewUser);
    app.post('/api/authorization/', User.authorizationUser);
};