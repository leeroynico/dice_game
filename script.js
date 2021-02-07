let rollDice = document.getElementById('rollDice');
let dice = document.getElementById('dice');
let hold = document.getElementById('hold');
let score = document.getElementById('score');
let diceRandom = 0;
let scoreJ1 = 0;

rollDice.addEventListener('click',()=>{
 diceRandom = (Math.round((Math.random() * (6 - 1) + 1)));
 dice.innerHTML = diceRandom;
})

hold.addEventListener('click',()=>{
  scoreJ1 += diceRandom;
  score.innerHTML = scoreJ1;
 })


/*--new game--*/
let newGame = document.getElementById('newGame');

newGame.addEventListener('click', ()=>{
  scoreJ1 = 0;
  diceRandom = 0;
  score.innerHTML = scoreJ1;
  dice.innerHTML = "";
})
