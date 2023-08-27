var playerScore = 0;
var computerScore = 0;
var tieScore = 0;

function play(playerChoice) {
  var choices = ['rock', 'paper', 'scissors'];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  var result = '';
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
    tieScore++;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
    playerScore++;
  } else {
    result = 'Computer wins!';
    computerScore++;
  }

  updateScores();

  var message =
    'You chose ' + playerChoice + '. Computer chose ' + computerChoice + '. ' + result;

  alert(message);
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;

  updateScores();
}

function updateScores() {
  document.getElementById('playerScore').innerText = playerScore;
  document.getElementById('computerScore').innerText = computerScore;
  document.getElementById('tieScore').innerText = tieScore;
}