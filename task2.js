// Task 2: Create a guessing game.

// User story: User can enter a number
// User story: The system pick a random number from 1 to 6
// User story: If user number is equal to a random number, give user 2 points
// User story: If the user number is different from the random number by 1,
// give the user 1 point, otherwise, give the user 0 points.
// User story: User can decide to play the game as long as they want to

const enterNumber = () => {
  return new Promise((resolve, reject) => {
    // user to enter a number
    const userNumber = Number(window.prompt("Enter a number between 1- 6: "));

    // generate random number
    const randomNumber = Math.floor(Math.random() * 6 - 1);

    // setting a condition to check whether to resolve or reject.
    if (isNaN(userNumber)) {
      reject(new Error("wrong Input type."));
    }

    if (userNumber === randomNumber) {
      resolve({
        points: 2,
        randomNumber,
      });
    } else if (
      userNumber === randomNumber - 1 ||
      userNumber === randomNumber + 1
    ) {
      resolve({
        points: 1,
        randomNumber,
      });
    } else {
      resolve({
        points: 0,
        randomNumber,
      });
    }
  });
};

// Check if user wants to continue with the game
const continueGame = () => {
  // you can only pass resolve as parameter if reject is not needed
  return new Promise((resolve) => {
    if (window.confirm("Do you want to continue?")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};
/*
// Using .then()
// to handle the guess number
const handleGuess = () => {
  enterNumber()
    .then((result) => {
      alert(`Dice: ${result.randomNumber}, you get ${result.points}`);

      continueGame().then((result) => {
        if (result) {
          handleGuess();
        } else {
          alert("Game ends!!!");
        }
      });
    })

    .catch((error) => alert(error));
};
*/

// Refactoring using async and await

// to handle the guess number
const handleGuess = async () => {
  try {
    const result = await enterNumber();
    alert(`Dice: ${result.randomNumber}, you get ${result.points}`);

    const isContinuing = await continueGame();

    if (isContinuing) {
      handleGuess();
    } else {
      alert("Game ends!!!");
    }
  } catch (error) {
    alert(error);
  }
};

const start = () => {
  handleGuess();
};

start();
