// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{
 useNewUrlParser: true },(err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp')

//delete Many
  db.collection('Users').deleteMany({name: 'Kyle'}).then((result) => {
    console.log(result);
  });
// deleteOne
  db.collection('Users').deleteOne({location: 'Seagate'}).then((result) => {
    console.log(result);
  });
//findOneAndDelete
  db.collection('Users').findOneAndDelete({age: 72}).then((result) => {
    console.log(result);
  });
  client.close();
});
