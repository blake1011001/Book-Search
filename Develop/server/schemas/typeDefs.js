const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        _id: ID!
        bookID: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input savedBook {
        description: String
        title: String
        bookId: String
        image: String
        link: String
        authors: [String]
    }

    type Mutation {
        createUser( username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!) : Auth
        saveBook(bookData: BookInput!) : User
        removeBook( bookId: String!) : User
      }
      `;
      
      module.exports = typeDefs;