const TweetModel = require('../model/tweetSchema')
const UserModel = require('../model/userSchema')


exports.saveTweet = (req, res) => {
    var username = req.body.username
    var tweet = req.body.id
    UserModel.findOne({ username: username }, (err, data) => {
        if (err)
            return res.status(400).send('error')
        if (!data)
            return res.status(401).send('no user Found')
        else {
            data.bookmarks.push(tweet)
            UserModel.updateOne({ username: username }, { bookmarks: data.bookmarks }, (err, data) => {
                if (err)
                    return res.status(400).send('error')
                if (data) {
                    TweetModel.findOne({ _id: tweet }, (err, data) => {
                        if (err)
                            return res.status(400).send('error')
                        if (!data)
                            return res.status(401).send('user not Found')
                        else {
                            data.bookmarks.push(username)
                            TweetModel.updateOne({ _id: tweet }, { bookmarks: data.bookmarks }, (err, data) => {
                                if (err)
                                    return res.status(400).send('error')
                                if (data)
                                    return res.status(200).send('Saved')
                            })
                        }
                    })
                }
            })
        }
    })
}

exports.unsaveTweet = (req, res) => {
    var username = req.body.username
    var tweet = req.body.id
    UserModel.findOne({ username: username }, (err, data) => {
        if (err)
            return res.status(400).send('error')
        if (!data)
            return res.status(401).send('no user Found')
        else {
            removeElement(data.bookmarks, tweet)
            UserModel.updateOne({ username: username }, { bookmarks: data.bookmarks }, (err, data) => {
                if (err)
                    return res.status(400).send('error')
                if (data) {
                    TweetModel.findOne({ _id: tweet }, (err, data) => {
                        if (err)
                            return res.status(400).send('error')
                        if (!data)
                            return res.status(401).send('user not Found')
                        else {
                            removeElement(data.bookmarks, username)
                            TweetModel.updateOne({ _id: tweet }, { bookmarks: data.bookmarks }, (err, data) => {
                                if (err)
                                    return res.status(400).send('error')
                                if (data) {
                                    return res.status(200).send("unsaved")
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