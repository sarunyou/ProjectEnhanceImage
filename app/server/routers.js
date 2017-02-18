const express = require('express');
const _ourController = require('./controllers/_our-controller');
module.exports = function(app) {
    const apiRoutes = express.Router();
    app.use('/api', apiRoutes);
    apiRoutes.post('/helloworld', _ourController.helloworld);
}