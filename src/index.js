const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb://assisneto:assismenina123@ds253713.mlab.com:53713/go-week-db',
  {
    useNewUrlParser: true,
  },
);

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('serve on');
});
