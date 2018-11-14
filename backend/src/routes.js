const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetControllers');
const LikeControllers = require('./controllers/LikeController');

routes.get('/', (req, res) => res.send('hellou world'));

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

routes.put('/likes/:id', LikeControllers.store);

module.exports = routes;
