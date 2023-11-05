// const https = require('https')
// const fs = requrie("fs")
const path = require('path')
const express = require('express')
const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.static(path.join(__dirname, "public")))
app.use(express.static('https://fortnite.gg'))

const shopRouter = require('./router/shop');
app.use('/', shopRouter);

const apiRouter = require('./router/apiRouter')
app.use('/api', apiRouter)

/**
 * 
 * 
 */
// https.createServer(
//     {

//     },
//     app
// )

app.listen(8000, function (req, res) {
    var url = path.join(__dirname, "public")
    console.log(url)
    console.log("Server is running on 8000 port.");
})