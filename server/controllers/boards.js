var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');
var Review = mongoose.model('Review');


module.exports = {
    show: function(req, res){
        Restaurant.find({}, function(err, data) {
            if(err){
                res.json(err);  
            }else{
                res.json(data); 
            }
        })
    },
    add: function(req, res){
       Restaurant.create(req.body, function(err, data){
            if(err){
                res.json(err);
            } else {
                res.json(data);
            }
        })
    },
   delete: function(req, res){
        Restaurant.remove({_id: req.params.id}, function(err){
            if(err){
                res.json(err);
            } else {
                res.json("remove Success");
            }
        })
    },
    find: function(req, res){
        Restaurant.findOne({_id:req.params.id}, function(err, data) {
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    update: function(req, res){
        Restaurant.findOne({_id:req.params.id}, function(err, rest){
            rest.name = req.body.name;
            rest.cuisine = req.body.cuisine;
            rest.save(function(err){
                if(err){
                    res.json(err)
                }else{
                    res.json(rest)
                }
            })
        })
    },
    addReview: function(req, res){
        Review.create(req.body, function(err, data){
            
             if(err){
                 res.json(err);
             } else {
                console.log(data);
                Restaurant.update({_id: req.params.id}, {$push: {review: data}}, (err,data)=>{
                    if(err){
                        res.json(err);
                    }else{
                        res.json(data);
                    }
                })
             }
         })
     },
     showReview: function(req, res){
        Restaurant.findOne({_id: req.params.id}, function(err, data) {
            if(err){
                res.json(err);  
            }else{
                res.json(data); 
            }
        })
    }
};