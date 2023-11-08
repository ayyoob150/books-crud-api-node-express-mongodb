const app = require('express')();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const AddBookRouter = require('./routes/book.router');

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to Book Universe');
});

app.use('/', AddBookRouter);

mongoose.connect(process.env.mongodb_url)
  .then(() => {
    console.log('mongodb connected');
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on port ${process.env.PORT}`);
});
