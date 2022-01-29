const game = {
  title: 'Guess the Number!',
  biggestNum: 50,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuesses: function(){
    let guessInput = 0; //initialized guess Input
    guessInput = parseInt( //executed the prompts for player input
      prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
    );
    //if the guess isnt a number or outside the range, then keep calling getGuesses
    while(isNaN(guessInput)|| guessInput<this.smallest|| guessInput>this.biggestNum){
      guessInput = parseInt( //executed the prompts for player input until the number passed the while loop
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      );
    }return guessInput;
     //return the input from user when exit the loop
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}
console.log(game.getGuesses());
/**
 * 1. Add a prevGuesses property to the game object initialized to an empty array----DONE
 * 2. Add getGuess method to game that prompts the player to enter a guess with a message formatted as: Enter a guess between [smallestNum] and [biggestNum].
 */