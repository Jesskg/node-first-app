const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const errorController = require('./controllers/404');

app.set('view engine', 'ejs');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false })); //parses incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(express.static(path.join(__dirname, 'public'))); //serves static files from the specified directory

app.use('/admin', adminRoutes);

app.use('/', shopRoutes);

app.use(errorController.pageNotFound);


app.listen(3000);

