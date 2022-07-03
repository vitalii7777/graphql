const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const root = require('./resolvers');
const mongoose = require('mongoose');
const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  }),
);

async function start() {
    const dbName = 'TestRail';
    const mongoUri =
    `mongodb+srv://vitalii:admin123@cluster0.xist8.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(5000, () => console.log('Run on 5000'));
  } catch (e) {
    console.log(e);
  }
}

start().then((r) => r);
