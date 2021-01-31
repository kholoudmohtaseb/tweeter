// //Authntication and creating token
// const jwt = require('jsonwebtoken')

// function auth(req, res, next) {
//     var tokens = Object.values(req.cookies)
//     const token = tokens[0]
//     if (!token) {
//         return res.status(401).send('You have to login first')
//     }

//     try {
//         const verified = jwt.verify(token, process.env.TOKEN_SECRET)
//         req.user = verified
//         next()
//     }
//     catch (err) {
//         res.status(400).send('invalid Token')

//     }
// }

// module.exports = auth


const jwt = require('jsonwebtoken');
const User = require('./model/userSchema')

module.exports  =  async (req, res, next)=> {
    const token  = req.header("login")
    // console.log(token)

    if (!token) {
        return res.status(401).send('accses faild ')
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN)
        // console.log(verified)
        const user = await User.findOne({_id: verified._id})
         req.user = user;
         console.log(user);
        // res.header('login', token)
        next()
    }
    catch (err) {
        res.status(400).send('invalid Token')

    }
};