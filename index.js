const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    res.render('home')
})




app.listen(process.env.PORT || 3000 , function () {
    console.log('listening on port 3000');
})