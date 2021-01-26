const TweetModel = require('../model/tweetSchema')
const UserModel = require('../model/userSchema')


//Like tweet controller
exports.likeTweet = (req, res) => {
    var username = req.body.username
    var tweets = req.body.id

    //find user, add the tweet id to his likes array and update the DB
    UserModel.findOne({ username: username }, (err, data) => {
        if (err)
            return res.status(400).send('error')
        if (!data)
            return res.status(401).send('no user Found')
        else {
            data.likes.push(tweets)
            UserModel.updateOne({ username: username }, { likes: data.likes }, (err, data) => {
                if (err)
                    return res.status(400).send('error')
                if (data) {
                    //find the tweet, add the username to tweet likes array and update the DB
                    TweetModel.findOne({ _id: tweets }, (err, data) => {
                        if (err)
                            return res.status(400).send('error')
                        if (!data)
                            return res.status(401).send('user not Found')
                        else {
                            data.likes.push(username)
                            TweetModel.updateOne({ _id: tweets }, { likes: data.likes }, (err, data) => {
                                if (err)
                                    return res.status(400).send('error')
                                if (data)
                                    return res.status(200).send('add to Likes')
                            })
                        }
                    })
                }
            })
        }
    })
}


//remove Likes Controller
exports.removelLike = (req, res) => {
    var username = req.body.username
    var tweets = req.body.id
    //find user, remove the tweet id to his likes array and update the DB
    UserModel.findOne({ username: username }, (err, data) => {
        if (err)
            return res.status(400).send('error')
        if (!data)
            return res.status(401).send('no user Found')
        else {
            removeElement(data.likes, tweets)
            UserModel.updateOne({ username: username }, { likes: data.likes }, (err, data) => {
                if (err)
                    return res.status(400).send('error')
                if (data) {
                    //find the tweet, remove the username to tweet likes array and update the DB
                    TweetModel.findOne({ _id: tweets }, (err, data) => {
                        if (err)
                            return res.status(400).send('error')
                        if (!data)
                            return res.status(401).send('user not Found')
                        else {
                            removeElement(data.likes, username)
                            TweetModel.updateOne({ _id: tweets }, { likes: data.likes }, (err, data) => {
                                if (err)
                                    return res.status(400).send('error')
                                if (data) {
                                    return res.status(200).send("remove from Likes")
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