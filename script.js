/*--variables générales--*/
let roundJ1 = document.getElementById('roundJ1');
let globalJ1 = document.getElementById('globalJ1');
let roundJ2 = document.getElementById('roundJ2');
let globalJ2 = document.getElementById('globalJ2');
let img = document.getElementById('dicePicture');

let scoreJ1 = 0;
let scoreJ2 = 0;
let cumulJ1 = 0;
let cumulJ2 = 0;

let player = 1;
function nextPlayer(){
  player === 1 ? player ++ : player--
};
/*--bouton roll--*/
document.getElementById('rollDice').addEventListener('click',()=>{
 let diceRandom = Math.round((Math.random() * (6 - 1) + 1));
 img.src = "./img-dice/dice"+diceRandom+".png";
 if (diceRandom === 1){ 
  player===1 ? scoreJ1 = 0 : scoreJ2 = 0
  nextPlayer();
 } else {
  player===1 ? scoreJ1 += diceRandom : scoreJ2 += diceRandom};
  player===1 ? roundJ1.innerHTML = scoreJ1 : roundJ2.innerHTML = scoreJ2;
})

/*--bouton hold--*/
document.getElementById('hold').addEventListener('click',()=>{
  cumulJ1 += scoreJ1;
  scoreJ1 = 0;
  roundJ1.innerHTML = scoreJ1;
  globalJ1.innerHTML = cumulJ1;
 })


/*--new game--*/
document.getElementById('newGame').addEventListener('click', ()=>{
  rollDice.disabled = false;
  scoreJ1 = 0;
  scoreJ1.innerHTML = scoreJ1;
})




