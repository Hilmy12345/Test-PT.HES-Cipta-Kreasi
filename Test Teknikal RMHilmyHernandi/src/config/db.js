const { MongoClient } = require("mongodb");
const { logger, logErrorServer } = require("../config/winston");
require("dotenv").config();
const uri = process.env.URIDB;
const client = new MongoClient(uri);
const dbName = process.env.DB;

let db;

async function connectToMongoDB() {
  try {
    await client.connect();
    db = client.db(dbName);
  } catch (err) {
    logErrorServer.error(`DB Down`);
  }
}

function getDB() {
  return db;
}

module.exports = { connectToMongoDB, getDB };
