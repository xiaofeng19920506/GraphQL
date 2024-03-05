let Users = [
  {
    id: "1",
    firstName: "Aaron",
    lastName: "Liu",
    age: 31,
    email: "aaronliu05061992@gmail.com",
    emailVerified: false,
    avatar: "",
    orderid: ["1"],
  },
  {
    id: "2",
    firstName: "Aaron",
    lastName: "Liu",
    age: 31,
    email: "aaronliu05061992@gmail.com",
    emailVerified: false,
    avatar: "",
    orderid: ["3", "1"],
  },
  {
    id: "3",
    firstName: "Aaron",
    lastName: "Liu",
    age: 31,
    email: "aaronliu05061992@gmail.com",
    emailVerified: false,
    avatar: "",
    orderid: ["4"],
  },
  {
    id: "4",
    firstName: "Aaron",
    lastName: "Liu",
    age: 31,
    email: "aaronliu05061992@gmail.com",
    emailVerified: false,
    avatar: "",
    orderid: ["2"],
  },
];

let Orders = [
  {
    id: "1",
    productid: ["1"],
    total: 12.3,
  },
  {
    id: "2",
    productid: ["3", "1"],
    total: 24.6,
  },
  {
    id: "3",
    productid: ["2"],
    total: 12.3,
  },
  {
    id: "4",
    productid: ["1"],
    total: 12.3,
  },
  {
    id: "5",
    productid: ["1"],
    total: 12.3,
  },
];
let Products = [
  {
    id: "1",
    title: "car key",
    description: "to start the car",
    remailQuality: 2,
    price: 12.3,
  },
  {
    id: "2",
    title: "car key",
    description: "to start the car",
    remailQuality: 2,
    price: 12.3,
  },
  {
    id: "3",
    title: "car key",
    description: "to start the car",
    remailQuality: 2,
    price: 12.3,
  },
  {
    id: "4",
    title: "car key",
    description: "to start the car",
    remailQuality: 2,
    price: 12.3,
  },
  {
    id: "5",
    title: "car key",
    description: "to start the car",
    remailQuality: 2,
    price: 12.3,
  },
];

export default { Products, Users, Orders };
