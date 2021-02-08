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
let player = 1; // player = 1 alors playerA, sinon plaer B (player =2)
function nextPlayer(){player === 1 ? player ++ : player--};
/*--bouton roll--*/
document.getElementById('rollDice').addEventListener('click',()=>{
  //génére un nombre aléatoire entre 1 et 6 et affiche le dé
 let diceRandom = Math.round((Math.random() * (6 - 1) + 1));
 img.src = "./images/dice"+diceRandom+".png";
  // si 1, perdu, sinon on cumul le score 
 if (diceRandom === 1){ 
  player===1 ? scoreJ1 = 0 : scoreJ2 = 0
  alert ('dommage tu as fait 1, tu passes ton tour!')
  nextPlayer();
 } else {
  player===1 ? scoreJ1 += diceRandom : scoreJ2 += diceRandom};
  player===1 ? roundJ1.innerHTML = scoreJ1 : roundJ2.innerHTML = scoreJ2;
})

/*--bouton hold--*/
document.getElementById('hold').addEventListener('click',()=>{
  player===1 ? cumulJ1 += scoreJ1 : cumulJ2 += scoreJ2
  scoreJ1 = 0
  scoreJ2 = 0
  player===1 ? roundJ1.innerHTML = scoreJ1 : roundJ2.innerHTML = scoreJ2
  player===1 ? globalJ1.innerHTML = cumulJ1 : globalJ2.innerHTML = cumulJ2
  nextPlayer();
  if (cumulJ1>limite) {
    alert('player A a gagné') 
    document.location.reload()
   }
   if (cumulJ2>limite) {
    alert('player B a gagné') 
    document.location.reload()
   }
 })
/*--new game--*/
document.getElementById('newGame').addEventListener('click', ()=>{
  document.location.reload();
})

/*--test new option--*/
let winScore = document.getElementById('winScore');
let limite = 100;
  document.getElementById('range').addEventListener('ionChange',()=>{
  limite = document.getElementById('range').value;
  winScore.innerHTML = limite;
})

