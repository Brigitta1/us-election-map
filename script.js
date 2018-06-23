var createPolitician = function(name, partyColor) {

  var politician = {};
      politician.name = name;
      politician.electionResults = null;
      politician.totalVotes = 0;
      politician.partyColor = partyColor;
      
      politician.tallyVotes = function() {
        this.totalVotes = 0;
        for (var i=0; i<this.electionResults.length; i++) {
          this.totalVotes = this.totalVotes + this.electionResults[i];
        }
      };
  
  return politician;
  

};

var jane = createPolitician("Jane Doesitall", [245, 141, 136]);
var betsy = createPolitician("Betsy Rocks", [132, 17, 11]);

console.log("Jane's color is " + jane.partyColor);
console.log("Betsy's color is " + betsy.partyColor);



betsy.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

jane.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

jane.electionResults[9] = 1;
betsy.electionResults[9] = 28;

jane.electionResults[4] = 17;
betsy.electionResults[4] = 38;

jane.electionResults[43] = 11;
betsy.electionResults[43] = 27;

console.log(jane.electionResults);
console.log(betsy.electionResults);


var getStateResults = function (state) {

  theStates[state].winner = null;
  
  if (jane.electionResults[state] > betsy.electionResults[state]) {
    theStates[state].winner = jane;
    
  } else if (jane.electionResults[state] < betsy.electionResults[state]) {
    theStates[state].winner = betsy;
  }


    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
  
    }   else {
        theStates[state].rgbColor = [11, 32, 57];
        }
    
};


getStateResults;


jane.tallyVotes();
betsy.tallyVotes();

console.log(jane.totalVotes);
console.log(betsy.totalVotes);

winner = "";

if (jane.totalVotes > betsy.totalVotes) {
  winner = jane.name;
} else if (jane.totalVotes < betsy.totalVotes){
  winner = betsy.name;
} else {
  winner = "DRAW."
}

console.log("The winner of the election is " + winner + "!");









