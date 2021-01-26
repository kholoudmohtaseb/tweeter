const TweetModel = require('../model/tweetSchema')
const UserModel = require('../model/userSchema')


exports.likeTweet = (req, res) => {
    var username = req.body.username
    var tweets = req.body.id
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

exports.removelLike = (req, res) => {
    var username = req.body.username
    var tweets = req.body.id
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



function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}