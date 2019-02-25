const boards = require('../controllers/boards.js');
const path = require('path');

module.exports = function(app){
    // app.post('/api/add', function(req, res) {
    //    boards.add(req, res);
    // })
    // app.get('/api/show', function(req, res) {
    //     boards.show(req, res);
    // })
    // app.delete('/api/delete/:id', function(req, res) {
    //     boards.delete(req, res);
    // })
    // app.get('/api/find/:id', function(req, res) {
    //     boards.find(req, res);
    // })
    // app.put('/api/update/:id', function(req, res) {
    //     boards.update(req, res);
    // })
    // app.post('/api/addreview/:id', function(req, res) {
    //     boards.addReview(req, res);
    // })
    // app.get('/api/showreview/:id', function(req, res) {
    //     boards.showReview(req, res);
    // })
   
    app.all('*', function(req, res) {
       res.sendFile(path.resolve('./public/dist/public/index.html'));
    })
}
