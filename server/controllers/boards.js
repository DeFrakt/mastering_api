// var mongoose = require('mongoose');
// var Restaurant = mongoose.model('Restaurant');
// var Review = mongoose.model('Review');
var auth = require('../config/auth');
var request = require('request');

module.exports = {
    addSong: function(req,res){
        request.post({
            headers: {'Content-type' : 'application/json', 'Authorization': 'Basic ' + auth()},
            url: 'https://auphonic.com/api/simple/productions.json',
            body: JSON.stringify(req.body)
            }, function(err, data){
                if(err){
                    res.json(err);
                }else{
                    res.json(data);
                }
        });
        console.log("Controller", JSON.stringify(req.body))
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