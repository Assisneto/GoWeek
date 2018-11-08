const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetControllers');

routes.get('/', (req, res) => res.send('hellou world'));

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

module.exports = routes;
