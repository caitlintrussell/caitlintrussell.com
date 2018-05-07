import React from 'react';
import Arrow from '../arrow';
import PrismCode from 'react-prism';
import 'prismjs';
import './prism.css';
import dogByBreed from './dogbybreed.gif';
import allDogs from './alldogs.gif';
import addDog from './adddog.gif';

const PEP = () => {
  return (
    <div>
      <div className="Journal-main">
        <div className="Journal-title">
          <h3>Simple GraphQL Server with Express and Sequelize</h3>
          <h4>May 6, 2018</h4>
        </div>
        <div className="Journal-text">
          <div>
            <h4>Introduction to GraphQL</h4>
            <p className="Inner-text">
              GraphQL is a query language for your API. It gives you the power
              to ask for exactly what you want, and nothing more. In situations
              where you have no control over your backend and little knowledge
              of its structure, GraphQL leaves little mystery. Because GraphQL
              is a
              <em>query</em> language, it isn't limited to a particular storage
              engine. SQL? NoSQL? No problem. While GraphQL can be a replacement
              for a more traditional RESTful API, it can also be used on top of
              your old setup, allowing for more performant querying without
              having to change your entire codebase.
            </p>
            <p className="Inner-text">
              I first was acquainted with this wonderful technology during my
              Stackathon project at Fullstack Academy. I endeavored to create a
              full stack React Native app, using my tried-and-true setup of
              Express/Sequelize/Postgres. In this four day project, I spent the
              first two days pouring over the docs for React Native, GraphQL and
              Apollo. Once I felt I had a sound knowledge base, I started to
              code. In those next two days, I replaced all of what would have
              been REST with GraphQL. While I ran out of time to utilize all of
              my beautiful queries on the front end, I'm still amazed at how
              quickly I was able to pick it up.
            </p>
            <p className="Inner-text">
              I figured I'd wrap up all of those tasty bits of knowledge I
              acquired over those four days and spin out a little tutorial.
              Perhaps it'll nudge one of you towards trying it out for yourself!
              Create a new directory and follow the directions!
            </p>
            <h4>Getting Started</h4>
            <p className="Inner-text">
              Like most projects, we have a bunch of NPM packages to install. Get going!
            </p>
            <PrismCode className="language-javascript">
{`
npm install express graphql express-graphql sequelize pg graphql-tools
`}
            </PrismCode>
            <p className="Inner-text">
              Normally, I'd make folders for each part of this server, because I'd be storing a ton of data in there. But for this tutorial, let's just make files for all of the parts of our GraphQL server to keep it simple. On your command line:
            </p>
            <PrismCode className="language-javascript">
{`
touch server.js db.js seed.js graphql.js query.js mutation.js schema.graphql
`}
            </PrismCode>
            <p className="Inner-text" >
              Now, lets set up our Postgres database and models, using sequelize. I won't go too deep into this, but if you're not familiar with Sequelize, it's a wonderful and easy to use ORM, and I highly recommend it! I've decided we'll have a bunch of dogs in our database, because, well, dogs are great! I also made a seed file, which is too long to embed here, but feel free to check it out on the github.
            </p>
            <PrismCode component="pre" className="language-javascript">
{`/**** db.js ****/

const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/graphql-demo', {
    logging: false,
    operatorsAliases: false,
  }
);

const Dog = db.define('dogs', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = {
  db,
  models: { Dog }
}
`}
            </PrismCode>
            <p className="Inner-text">
              Loooookin' good there! Now let's string up our server and get it running so we can check out how we're doing along the way. This is where you'd do all of your wonderful error handling in Express, but I'm not going over that today.
            </p>
              <PrismCode component="pre" className="language-javascript">
{`/**** server.js ****/

const expressGraphql = require('express-graphql');
const express = require('express');
const app = express();
const {db, models} = require('./db');
const schema = require('./graphql');
const seed = require('./seed');
const PORT = 8080;

app.use('/graphql', expressGraphql( (req, res) => ({
  schema,
  pretty: true,
  graphiql: true,
  context: { req, res, models },
})));

db.sync({ force: true })
  .then(() => seed())
  .then(() => {
    app.listen(PORT, () => console.log('Ready and waiting on port' + PORT));
  })
  .catch(console.error)
`}
            </PrismCode>
            <p className="Inner-text">
              Alright, now that we have our server up and running, now lets get to the nitty gritty of what GraphQL is capable of. GraphQL is generally composed of four things, <em>Schema</em>, <em>Resolvers</em>, <em>Queries</em>, and <em>Mutations</em>. Schema is where you define your data types (GraphQL is a typed language) that, in this case, relate to your database models. Resolvers determine what data is returned back to you. Queries determine what actions are required to retrieve that data. And Mutations are like Queries, but they are mutative. To begin, lets work on our schema.
            </p>
            <PrismCode component="pre" className="language-graphql">
{`# schema.graphql #

### everytime we query 'Dog', we will use this type ###
type Dog @model {
  # Anything followed in an ! is required in graphQL.
  id: ID! @isUnique
  name: String!
  breed: String!
}

### here are all of root our queries ###
type Query {
# this query will give us an array of all dogs #
  allDogs: [Dog]
# notice that these queries look more like functions, we will call them with passed in strings #
  dogByBreed(breed: String!): [Dog]
  dogByName(name: String!):  Dog
}

### this will be our input type for anytime we are making a dog ###
input addDogInput {
  name: String!
  breed: String!
}
input removeDogInput {
  name: String!
}

type Mutation {
  # is referencing our input types from above
  addDog(input: addDogInput!): Dog
  removeDog(input: removeDogInput!): Dog
}
`}
            </PrismCode>
            <p className="Inner-text">
              I know this must seem a little weird right now, but trust me, it'll all make sense in a minute. And, yes, the syntax is strange too, but think of it like JSON with much less punctuation. To break it down, <em>type Dog</em> is like a variable that forms the data structure for what fields are available when you query or return the Dog. <em>type Query</em> sets up the structure for what queries are available for us to use, and what sort of data they return. The <em>input</em> fields are for setting up what inputs you accept in a mutation. And mutations mutate data, like a post, put or delete in RESTful architecture. Now let's hook up these queries so we can see GraphQL in action!
            </p>
            <PrismCode component="pre" className="language-javascript">
{`/*** query.js ***/

module.exports = {
  allDogs: (_, __, { req, res, models: { Dog } }) => {
    return Dog.findAll()
  },
  dogByBreed: (_, { breed }, { req, res, models: { Dog } }) => {
    return Dog.findAll({where: {breed}})
  },
  dogByName: (_, { name }, { req, res, models: { Dog } }) => {
    return Dog.findAll({where: {name}})
  },
}
`}
            </PrismCode>
            <p className="Inner-text">
              Ok, we've got some complicated looking functions here, but they're actually quite simple, once you break them down. The first argument is the previous object, which is used in more advanced queries that we will not cover here. The second argument is an arguments object, we'll be using that a lot in mutations and the "dogBy____" methods we've made here. The third is the context, and this is very important!! Remember the context field that we set up in initialization of the GraphQL server in the server.js file? Well, here it is in all it's glory. You can use that to access the data points that you would use in normal Express-land. Here we have (req, res, models), where we are destructuring the model that we're using this query. Hence, we don't have to require our models from within these files, they're served to us through the server setup! Wow! Now for some mutations.
            </p>
            <PrismCode component="pre" className="language-javascript">
{`/*** mutation.js ***/

module.exports = {
  addDog: (_, { input: { name, breed }}, {
    req, res, models: { Dog }
  }) => Dog.create({ name, breed }),
}
`}
            </PrismCode>
            <p className="Inner-text">
              Mutations! Keeping it simple here, because all I'd ever want to do is add a dog, not destroy or change one. Obviously... So, similar to the above, we're passing in our inputs that we defined in the root mutations type in our schema, and using them to make a dog with sequelize methods! Awesome!! Next we'll hook it all up and play around with GraphiQL to show our work.
            </p>
            <PrismCode component="pre" className="language-javascript">
{`/*** graphql.js ***/

const { readFileSync } = require('fs');
const { makeExecutableSchema } = require('graphql-tools');
const Query = require('./query')
const Mutation = require('./mutation')

const typeDefs = readFileSync('./schema.graphql', 'utf-8');
const resolvers = { Query, Mutation }

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema;
`}
            </PrismCode>
            <p className="Inner-text">
              Alright, here's where the magic truly happens. That readFileSync is simply parsing through our schema.graphql file to make it interpretable by the 'makeExecutableSchema' function. Now, that function injects your schema with all of your resolvers which gets fed into your GraphQL server (we set that up already). Magic! Now, since we have set 'graphiql: true' on our server, we can demo out these queries! Head on over to localhost:8080/graphiql and practice some queries!
            </p>
            <p className="Inner-text">
            <h4>Querying All Dogs</h4>
            A very simple query, just type the name and what you'd like to receive back. Press ctrl+space to see your options.
              <img src={allDogs} className="img-responsive" alt="querying all dogs"/>
            </p>
            <p className="Inner-text">
            <h4>Querying All Dogs By Breed</h4>
            Another simple query, but this time with variables! I can't tell you how embarassingly long it took me to figure out how to use variables in Graphiql... Oh well. Remember to input all of your variables in JSON. No hanging commas, please! Luckily for us, Graphiql is awesome and will point out any errors while we type up our queries.
              <img src={dogByBreed} className="img-responsive" alt="querying dogs by breed"/>
            </p>
            <p className="Inner-text">
            <h4>Adding A Dog</h4>
            A mutation! And it returns what's been created! Notice the nesting input in the query variables and how we're referencing our previous made input type at the start of our query! So cool, y'all.
              <img src={addDog} className="img-responsive" alt="adding a dog"/>
            </p>
            <p className="Inner-text">
              There ya have it! It works! Now, obviously, this very simple dog list app is not a great use case for GraphQL, but I hope you've learned enough to want to explore its true potential. Being able to have absolute control over exactly what a query returns, with very little setup is an awesome feature! Async/await truly shines in the more complex queries and mutations. In the future, I'd like to get into some of those and how GraphQL can handle associations. It can effectively eliminate the need for eager loading in Sequelize. Oh man, that's the good stuff. Well, that's all folks, thanks for reading!
            </p>
          </div>
        </div>
      </div>
      <Arrow />
    </div>
  );
};

export default PEP;
