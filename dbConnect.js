require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;


const uri = "mongodb+srv://jurani_mohit:SIT725@sit725.tc86ncg.mongodb.net/?retryWrites=true&w=majority";
// const MongoClient = require('mongodb').MongoClient
const client = new MongoClient(uri, {useNewUrlParser: true})

client.connect((err) => {
    if(!err){
      console.log('Database Connected')
    }else{
      console.log('[error]',err)
    }
});


exports.mongoClient = client;