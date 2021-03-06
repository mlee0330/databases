var db = require('../db');



module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT messages.msgTxt, messages.objectID, messages.roomname FROM messages \
                         LEFT OUTER JOIN users ON (messages.userID = users.userID)';
      db.query(queryString, function(err, results){
        if(err){
          console.log('There was an error retrieving information from the database.');
        }
        console.log(results, 'from models');
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryString = 'INSERT INTO messages (userID, msgTxt, roomname) VALUES ((SELECT userID FROM users WHERE username = ? LIMIT 1), ?, ?)';
      db.query(queryString, params, function(err, results){
        if(err){
          console.log('There was an error adding information to the database. MODELS MESSAGES');
        }
        callback(results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * FROM users';
      db.query(queryString, function(err, results){
        if(err){
          console.log('There was an error retrieving information from the database.');
        }
        callback(results);
      });
    },
    post: function (params, callback) {
      var queryString = 'INSERT INTO users (username) VALUES (?)';
      db.query(queryString, function(err, results){
        if(err){
          console.log('There was an error adding information to the database. MODELS USERS');
        }

        callback(results);
      });
    }
  }
};

