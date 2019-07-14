const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const config = require('config');
const PORT = process.env.PORT || 3001;

const app = express();

const routes = require('./routes');

// const Products = require('./assets/products.json');

// Connect Database
mongoose.connect(config.DBHost, {
  useNewUrlParser: true,
  useCreateIndex: true
});

// Passport.js config
require('./passport')(passport);

// Config 
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'REACTCARTAPIs',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
	url: config.DBHost,
	collection: 'sessions',
	autoReconnect: true
  })
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', routes.auth);
app.use('/api/user', routes.user);
app.use('/api/shop', routes.shop);
app.use('/api/products', routes.products);
app.use('/api/cart', routes.cart);

app.listen(PORT, () => console.log('server running on', PORT));

module.exports = app;
