const mongoose = require("mongoose");
const MONGO_USERNAME = "bharatsingh";
const MONGO_PASSWORD = "bharat@1188";
const MONGO_HOSTNAME = "127.0.0.1";
const MONGO_PORT = "27017";
const MONGO_DB = "node-project";

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=node-project`;
var url = "mongodb://localhost:27017/node-project";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology :true});
const con = mongoose.connection;

con.on("open", () => {
	console.log("db connected...");
});
