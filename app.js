const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  guessInput: 0,
  getGuesses: function(){
    //let guessInput = 0; //initialized guess Input
    guessInput = parseInt( //executed the prompts for player's input
      prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
    );
    //if the guess isnt a number or outside the range, then keep calling getGuesses
    while(isNaN(guessInput)|| guessInput<this.smallest|| guessInput>this.biggestNum){
      //keep executing the prompts for player's input until the number does not meet the while loop condition, then exit the loop
      guessInput = parseInt( 
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      );
    }return guessInput;
     //return the input from user when exit the loop
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

    do{
      this.prevGuesses.push(this.getGuesses());
    } while(this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);  
  
  return this.prevGuesses;
    
    
  }
}
//console.log(game.getGuesses());
console.log(game.play());
/**
 * 1. Add a prevGuesses property to the game object initialized to an empty array----DONE
 * 2. Add getGuess method to game that prompts the player to enter a guess with a message formatted as: Enter a guess between [smallestNum] and [biggestNum]. ----DONE
 * 3.Ensure getGuess is a number, between smallestNum and biggestNum.----DONE
 * 4.From within the play method, invoke the getGuess method from inside a loop, and add the new guess to the prevGuesses array.
 */