require("dotenv");

const DATABASE_URL =
  process.env.DATABASE_URL ||
  "postgres://pitjbdpytedjzd:0f75ad9b8e4a791113769372263bbaf9bce93b9b5e95a8f8d54543348dfaff1d@ec2-44-206-89-185.compute-1.amazonaws.com:5432/dds6mgc9ud250p";
const PORT = process.env.PORT || 3001;
const SEKRET = "Dashain";

module.exports = { DATABASE_URL, PORT, SEKRET };
