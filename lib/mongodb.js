import { MongoClient, ObjectId } from "mongodb";

let client = new MongoClient(process.env.MONGODB_URI, {

});

client.ObjectId = ObjectId;

export default client;