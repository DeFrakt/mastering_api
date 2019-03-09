// var mongoose = require('mongoose');
// var Restaurant = mongoose.model('Restaurant');
// var Review = mongoose.model('Review');


module.exports = {
    addSong: function(req,res){
        request.post({
            headers: {'User-Agent': 'uelib v6.8', 'Content-type' : 'application/json', 'Authorization': 'Basic ' + auth()},
            url: 'https://auphonic.com/api/simple/productions.json',
            body: JSON.stringify(req.body)
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