module.exports = function(){
    //API authorization
        var username = "syaussi@gmail.com"
        var password = "slaver1450"
        var authKey = new Buffer.from(username + ":" + password).toString('base64')
    return authKey;
}
