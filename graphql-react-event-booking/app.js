const express = require('express');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

// build graphQl Schema 
var schema = buildSchema( 
`
    type RootQuery {
        events: [String!]!
    }

    type RootMutation {
        createEvent(name: String): String
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`
);

var root = {
    events: () =>
    {
        return ['coding', 'gaming' , 'running'];
    },
    createEvent: (args) =>
    {
        const eventName = args.name;
        return eventName;
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