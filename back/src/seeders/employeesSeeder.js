/* mySeedScript.js */
// require the necessary libraries
const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const _ = require("lodash");
// Connection URL
const url = "mongodb+srv://mauri:Yb6ZnuYH1SL4Na2g@cluster0.obqla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Database Name
const dbName = "employees";

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);

  const db = client.db(dbName);

  // get access to the relevant collections
  const usersCollection = db.collection("users");
  const postsCollection = db.collection("posts");
  // make a bunch of users
  let users = [];
  for (let i = 0; i < 5000; i += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    let newUser = {
      email: faker.internet.email(firstName, lastName),
      firstName,
      lastName,
      password: "password123"
    };
    users.push(newUser);

    // visual feedback always feels nice!
    console.log(newUser.email);
  }
  usersCollection.insertMany(users);

  // make a bunch of posts
  let posts = [];
  for (let i = 0; i < 5000; i += 1) {
    let newPost = {
      title: faker.lorem.words(7),
      body: faker.lorem.words(500),

      // use lodash to pick a random user as the author of this post
      author: _.sample(users),

      // use lodash to add a random subset of the users to this post
      likes: _.sampleSize(users, Math.round(Math.random * users.length)).map(
        user => user._id
      )
    };
    posts.push(newPost);

    // visual feedback again!
    console.log(newPost.title);
  }
  postsCollection.insertMany(posts);
  console.log("Database seeded! :)");
  client.close();
});