"use strict";

// require("dotenv").config();
// require("colors");

// const SECRET_KEY = process.env.SECRET_KEY || "secret-capstone2";

// const PORT = +process.env.PORT || 3001; 

// const TICKETMASTER_API_KEY = process.env.TICKETMASTER_API_KEY;
// const GEOCITIES_API_KEY = process.env.GEOCITIES_API_KEY;

// // Use dev database, testing database, or via env var, production database
// function getDatabaseUri() {
//   return (process.env.NODE_ENV === "test")
//       ? "artist_tracker_test"
//       : process.env.DATABASE_URL || "artist_tracker";
// }

// // Speed up bcrypt during tests, since the algorithm safety isn't being tested
// const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

// console.log("PORT:".yellow, PORT.toString());
// console.log("Database:".yellow, getDatabaseUri());

// module.exports = {
//   SECRET_KEY,
//   PORT,
//   TICKETMASTER_API_KEY,
//   GEOCITIES_API_KEY,
//   BCRYPT_WORK_FACTOR,
//   getDatabaseUri,
// };

require('dotenv');

const result = require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY || "secret-capstone2";
const PORT = +process.env.PORT || 3001;
const TICKETMASTER_API_KEY = process.env.TICKETMASTER_API_KEY;
const GEOCITIES_API_KEY = process.env.GEOCITIES_API_KEY;
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "artist_tracker_test"
      : process.env.DATABASE_URL || "artist_tracker";
}

let envs = {};

if (!('error' in result)) {
  console.log('***************ERROR*********')
  envs = result.parsed;
} else {
  console.log('*********NO ERROR***************')
  envs[TICKETMASTER_API_KEY] = process.env.TICKETMASTER_API_KEY;
  envs[GEOCITIES_API_KEY] = process.env.GEOCITIES_API_KEY;
}

module.exports = {envs, SECRET_KEY, PORT, BCRYPT_WORK_FACTOR, getDatabaseUri};