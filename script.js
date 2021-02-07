let rollDice = document.getElementById('rollDice');
let dice = document.getElementById('dice')

rollDice.addEventListener('click',()=>{
 let diceRandom = (Math.round((Math.random() * (6 - 1) + 1)));
 dice.innerHTML = diceRandom;
})