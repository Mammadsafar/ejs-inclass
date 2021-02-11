const express = require('express');
const app = express();
const path = require('path');

// const ejs = require('ejs');

app.use(express.static(path.join(__dirname, "public")))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/ejs', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views/index.html'))
    res.render('index', {
        firstname: 'Mohammad',
        lastname: 'Safarzadeh',
        skills: ["JS", "HTML", "CSS", "JS", "HTML", "CSS", "JS", "HTML", "CSS", "JS", "HTML", "CSS"]
    })
})
console.log("req.url");
app.get('/home', (req, res) => {
    res.render('pages/home', {
        user : {
            fname: "ali",
            lname: "rezaii"
        }
    })

})
app.get('/about', (req, res) => {
    res.render('pages/about', {
        user : {
            fname: "ali",
            lname: "rezaii"
        }
    })

})






app.listen(5005);