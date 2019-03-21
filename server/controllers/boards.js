// var mongoose = require('mongoose');
// var Restaurant = mongoose.model('Restaurant');
// var Review = mongoose.model('Review');
var auth = require('../config/auth');
var request = require('request');

module.exports = {
    addSong: function(req,res){
        console.log("inputfile: ", req.body.files.input_file);
        console.log("preset: ", req.body.data.preset);
        console.log("title: ", req.body.data.title);
        console.log("action: ", req.body.data.action);
        request.post({
            headers: {'Content-type' : 'application/json', 'Authorization': 'Basic ' + auth()},
            url: 'https://auphonic.com/api/simple/productions.json',
            input_file: req.body.files.input_file,
            preset: req.body.data.preset,
            title: req.body.data.title,
            action: req.body.data.action
            }, function(err, data){
                if(err){
                    res.json(err);
                }else{
                    res.json(data);
                }
        });
    }
//     add: function(req, res){
//        Restaurant.create(req.body, function(err, data){
//             if(err){
//                 res.json(err);
//             } else {
//                 res.json(data);
//             }
//         })
//     },
};