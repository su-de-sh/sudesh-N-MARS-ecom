require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;

const PORT = process.env.PORT || 3001;
const SEKRET = "Dashain";

module.exports = { DATABASE_URL, PORT, SEKRET };
