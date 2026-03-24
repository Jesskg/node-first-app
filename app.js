const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false })); //parses incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(express.static(path.join(__dirname, 'public'))); //serves static files from the specified directory

app.use('/admin', adminData.routes);

app.use('/', shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404.pug', { pageTitle: 'Page Not Found' });
});


app.listen(3000);

