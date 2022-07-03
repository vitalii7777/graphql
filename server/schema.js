const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
        id: ID
        username: String    
        age: Int
        posts: [Post]
    }
    type Post {
        id: ID
        title: String    
        content: String
    }
    input UserInput {
        id: ID
        username: String!    
        age: Int!
        posts: [PostInput]
    }   
    input PostInput {
        id: ID
        title: String!    
        content: String!
    }
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
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
