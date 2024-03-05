import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./db.js";

const resolvers = {
  Query: {
    products() {
      return db.Products;
    },
    orders() {
      return db.Orders;
    },
    users() {
      return db.Users;
    },
    user(_, args, context) {
      return db.Users.find((user) => user.id === args.id);
    },
    product(_, args, context) {
      return db.Products.find((product) => product.id === args.id);
    },
    order(_, args, context) {
      return db.Orders.find((order) => order.id === args.id);
    },
  },
  User: {
    order(parent) {
      return parent.orderid.map((orderId) =>
        db.Orders.find((order) => order.id === orderId)
      );
    },
  },
  Order: {
    products(parent) {
      return parent.productid.map((productId) =>
        db.Products.find((product) => product.id === productId)
      );
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

console.log("Server is listening at port : ", 5000);
