const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  guessInput: 0,
  render : function(){
    let guessesCount = this.prevGuesses.length;
    if(this.prevGuesses[guessesCount - 1] === this.secretNum){
      alert(`Congrats! You guessed the number in ${guessesCount} !`);
    }else{
      if(this.prevGuesses[guessesCount - 1] > this.secretNum){
        this.biggestNum = this.prevGuesses[guessesCount - 1];
        alert(`Your guess is too high Previous guesses: ${this.prevGuesses.join(', ')}`);
      }else{
        if(this.prevGuesses[guessesCount - 1] < this.secretNum){
          this.smallestNum = this.prevGuesses[guessesCount - 1];
          alert(`Your guess is too low Previous guesses: ${this.prevGuesses.join(', ')}`);
      }
    }
  }
  },
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

      //generate random secret number
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

      //do...while loop condition to check if the getGuesses has return the number that match secretNum ,if not then continue calling getGuesses and put the array
    while(this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum){
      this.prevGuesses.push(this.getGuesses());
      this.render();
    }
    
    //call render
    //this.render();
  
  return this.secretNum;
  }
}
game.play();
/**
 * 1. Add a prevGuesses property to the game object initialized to an empty array----DONE
 * 2. Add getGuess method to game that prompts the player to enter a guess with a message formatted as: Enter a guess between [smallestNum] and [biggestNum]. ----DONE
 * 3.Ensure getGuess is a number, between smallestNum and biggestNum.----DONE
 * 4.From within the play method, invoke the getGuess method from inside a loop, and add the new guess to the prevGuesses array.----DONE
 * 5. render that output the outcome of the guesses.----DONE
 * BONUS: If the player enters a number greater than the secretNum make it the new biggestNum, so that the player can't enter a number greater than it. If the player enters a number that is less than the secretNum make it the new smallestNum---DONE
 * MORE BONUS: When play is run, immediately prompt the player to enter the smallest and biggest numbers instead of pre-setting values.
 */