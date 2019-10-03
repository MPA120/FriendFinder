//Load Data
var friendList = require('../data/friends.js');

module.exports = function (app) {
  //GET Route
  app.get('api/friends', function (req, res) {
    res.json(friendList);
  });
  //POST Route
  app.post('/api/friends', function (req, res) {
    //Grabs new friend scores to compare with friends in friendList array
    var newFriendScores = req.body['scores[]'];
    console.log(req.body['scores[]']);
    //Adds new friend to friend list
    friendList.push(req.body);
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    
    for (var i = 0; i < friendList.length; i++) {
      var scoresDiff = 0;
   
      for (var j = 0; j < newFriendScores.length; j++) {
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

     
      scoresArray.push(scoresDiff);
    }

   
    for(var i=0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }

   
    var bff = friendList[bestMatch];
    res.json(bff);

   
    friendList.push(req.body);
  });
  }