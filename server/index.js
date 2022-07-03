const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const root = require('./resolvers');
const app = express();


app.use(cors());



app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
  }),
);

app.listen(5000, () => console.log('Run on 5000'));
