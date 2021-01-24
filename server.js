const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const routers = require('./routes');


app.use(bodyParser.json());
app.use(cors());

//mongoose
mongoose.connect("mongodb+srv://qamar:1234@cluster0.5pa3p.mongodb.net/tweeterDB?retryWrites=true&w=majority", { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })


//data schema and model
const userSchema = {
    userName: String,

}

const user = mongoose.model("UsersInfos", userSchema);

//API routes
app.get('/test', function (req, res) {
    user.find().then(users => res.json(users));
})

app.use('/', routers)




if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, function () {
    console.log("express is running");
})