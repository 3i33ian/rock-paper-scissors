const getUserChoice = function(userInput){
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput=== 'scissors' || userInput === 'bomb') {
     return userInput
  } else {
     console.log('Error!');
  }
}

const getComputerChoice = function(){
  let randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber) {
  case 0:
  return 'paper';
  case 1 :
  return 'scissors';
  case 2: 
  return 'rock';
  }
}

function determinateWinner(userInput, randomNumber){
  if(userInput === randomNumber){
  return 'It is a tie!';
  } else if(userInput === 'rock' && randomNumber ==='scissors'){
    return 'You win!';
  } else if(userInput === 'scissors' && randomNumber ==='rock'){
    return 'You lost!';
  } else if(userInput === 'paper' && randomNumber ==='scissors'){
    return 'You lost!';
  } else if(userInput === 'scissors' && randomNumber ==='paper'){
    return 'You win!'
  } else if(userInput === 'paper' && randomNumber ==='rock'){
    return 'You win!'
  } else if(userInput === 'rock' && randomNumber ==='paper'){
    return 'You lost!'
  } else if(userInput ==='bomb'){
    return'You double win!'
  }
}

function playGame(){
 const userChoice = getUserChoice('bomb');
 const computerChoice = getComputerChoice();
 console.log('You threw: ' + userChoice);
 console.log('The computer threw ' + computerChoice);
 console.log(determinateWinner(userChoice,computerChoice));
};

playGame();
