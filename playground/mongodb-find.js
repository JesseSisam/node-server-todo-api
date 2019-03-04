// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{
 useNewUrlParser: true },(err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos: ');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos');
  // });

  // db.collection('Users').find({
  //   _id:new ObjectID('5c76717e0c113a844c026058')
  // }).toArray().then((docs) => {
  //   console.log('User: ');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch User');
  // });

  db.collection('Users').find({name: 'Matthew'}).toArray().then((docs) => {
    console.log(`User: `);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch User');
  });

  client.close();
});
