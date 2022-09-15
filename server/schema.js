const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
        _id: ID
        name: String
        age: Int,
        createdAt: String
    }
    type Post {
        _id: ID
        title: String    
        content: String
    }
    input UserInput {
        _id: ID
        name: String!    
        age: Int!
        posts: [PostInput]
    }   
    input PostInput {
        _id: ID
        title: String!    
        content: String!
    }
    type Query {
        getAllUsers: [User]
        getUserName(name: String): User
    } 
    type Mutation {
        createUser(input: UserInput): User
    }   
    
`);

module.exports = schema;


/*
mutation{
  createUser(input:{
    username: "Test",
    age: 22
  }) {
    id,
    username,
    age,
    posts {
      id
    }
  }
}


fragment usersWithoutAge on User {
    id, username, posts {
        title, content
    }
}
query{
  getAllUsers {
    ...usersWithoutAge
  }
}

query{
  getAllUsers {
    id,
    age,
    username,
  }
}

mutation{
  createUser(input:{
    username: "Mako",
    age: 22,
    posts: [{id:1, title:"A", content: "B"}]
  }) {
    id,
    username,
    age,
    posts {
      id, content, title
    }
  }
}

 */
