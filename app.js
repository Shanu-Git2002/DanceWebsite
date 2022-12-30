const express = require("express");
const path = require("path");
const fs = require("fs");
// const options = require("options");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
mongoose.connect("mongodb://0.0.0.0:27017/contactDance")
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));
const port = 80;

// define mongoose scheema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
});

const contact = mongoose.model('Contact', contactSchema);

//EXPRESS SPECIFIC STUFF
// app.use(express.static('static', options))
// for serving static file
app.use('static', express.static('static'))
app.use(express.urlencoded())

// PUG SPACIFIC STUFF
// Set the templet engin as pug
app.set('view engine', 'pug')
    // Set the views directory
app.set('views', path.join(__dirname, 'views'))

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params)
});

app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params)
});

app.post('/contact', (req, res) => {
    const myData = new contact(req.body);
    myData.save().then(() => {
        res.send("this item has been saved to the database")
    }).catch(() => {
        res.status(400).send("item was not saved to the database")
    })

    // res.status(200).render('contact.pug')
})

// START THE SERVER
app.listen(port, () => {
    console.log(`the application start successfully on port ${port}`);
});