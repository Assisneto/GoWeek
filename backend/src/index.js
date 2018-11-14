const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);


mongoose.connect(
  'mongodb://assisneto:assismenina123@ds253713.mlab.com:53713/go-week-db',
  {
    useNewUrlParser: true,
  },
);

// eslint-disable-next-line no-unused-vars
app.use((req, _res, next) => {
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('serve on');
});
