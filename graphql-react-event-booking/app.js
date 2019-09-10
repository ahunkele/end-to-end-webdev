const express = require('express');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const events = [];

// build graphQl Schema 
var schema = buildSchema( 
`
    type Event
    {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
    }

    type RootQuery 
    {
        events: [Event!]!
    }

    input EventInput
    {
        title: String!
        description: String!
        price: Float!
    }

    type RootMutation
    {
        createEvent(eventInput: EventInput): Event
    }

    schema
    {
        query: RootQuery
        mutation: RootMutation
    }
`
);

var root = {
    events: () =>
    {
        return events;
    },
    createEvent: (args) =>
    {
        const event = 
        {
            _id : Math.random().toString(),
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: +args.eventInput.price,
            date: new Date().toISOString()
        };

        events.push(event);

        return event;
    }
}

app.use('/graphql', graphqlHttp(
    {
    schema: schema,
    rootValue: root,
    graphiql: true
    }
));

var server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })