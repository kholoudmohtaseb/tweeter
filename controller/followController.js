const UserModel = require('../model/userSchema')

//follow user Controller 
exports.follow = (req, res) => {
    var following = req.body.fusername
    var myusername = req.body.username

    //find user, add the username (he want to follow) to his following array and update the DB
    UserModel.findOne({ username: myusername }, (err, data) => {
        if (err)
            return res.status(400).send('error')
        if (!data)
            return res.status(401).send('no user Found')
        else {
            data.following.push(following)
            UserModel.update({ username: myusername }, { following: data.following }, (err, data) => {
                if (err)
                    return res.status(400).send('error')
                if (data) {
                    //find username you want to follow, add the username to his followers array and update the DB
                    UserModel.findOne({ username: following }, (err, data) => {
                        if (err)
                            return res.status(400).send('error')
                        if (!data)
                            return res.status(401).send('user not Found')
                        else {
                            data.followers.push(myusername)
                            UserModel.update({ username: following }, { followers: data.followers }, (err, data) => {
                                if (err)
                                    return res.status(400).send('error')
                                if (data)
                                    return res.status(200).send('followed')
                            })
                        }
                    })
                }
            })
        }
    })
}


//unfollow other users Controller
exports.unfollow = (req, res) => {
    var following = req.body.fusername
    var myusername = req.body.username
    //find user, remove the username (he want to follow) to his following array and update the DB
    UserModel.findOne({ username: myusername }, (err, data) => {
        if (err)
            return res.status(400).send('error')
        if (!data)
            return res.status(401).send('no user Found')
        else {
            removeElement(data.following, following)
            UserModel.update({ username: myusername }, { following: data.following }, (err, data) => {
                if (err)
                    return res.status(400).send('error')
                if (data) {
                    //find username you want to follow, remove the username to his followers array and update the DB
                    UserModel.findOne({ username: following }, (err, data) => {
                        if (err)
                            return res.status(400).send('error')
                        if (!data)
                            return res.status(401).send('user not Found')
                        else {
                            removeElement(data.followers, myusername)
                            UserModel.update({ username: following }, { followers: data.followers }, (err, data) => {
                                if (err)
                                    return res.status(400).send('error')
                                if (data) {
                                    return res.status(200).send("unfollowed")
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}


//remove specific element from array
function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}