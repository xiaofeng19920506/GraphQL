export const typeDefs = `#graphql
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        age: Int!
        email: String!
        emailVerified: Boolean!
        avatar: String
        order: [Order]
        cart: [Product]
    }
    type Order {
        id: ID!
        products: [Product!]!
        total: Float!
    }
    type Product {
        id: ID!
        title: String!
        description: String!        
        remailQuality: Int!
        price: Float!
        image: [String]
        sku: String
        review: String
        rating: Int
    }
    type Query {
        products: [Product]
        orders: [Order]
        users: [User]
        product(id: ID!): Product
        order(id: ID!): Order
        user(id: ID!): User
    }
`;
