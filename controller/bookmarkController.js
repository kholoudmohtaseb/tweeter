const TweetModel = require('../model/tweetSchema')
const UserModel = require('../model/userSchema')

//Add tweet to bookmark Controller

exports.saveTweet = (req, res) => {
    var username = req.body.username
    var tweet = req.body.id
    //find user, add the tweet id to his bookmarks array and update the DB
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
                    //find the tweet, add the username to tweet bookmarks array and update the DB
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

//remove tweet from bookmark Controller
exports.unsaveTweet = (req, res) => {
    var username = req.body.username
    var tweet = req.body.id
    //find user, remove the tweet id to his bookmarks array and update the DB
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
                    //find the tweet, remove the username to tweet bookmarks array and update the DB
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


//remove specific element from array
function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}