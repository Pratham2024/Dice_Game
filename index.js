var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

// created a lot of problem
var source1= "images/dice"+randomNumber1+".png";
var source2= "images/dice"+randomNumber2+".png";
// this  above section

// this below section by myself

document.querySelector(".img1").setAttribute("src",source1);
document.querySelector(".img2").setAttribute("src",source2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 wins";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").textContent="Player 2 Wins";
}
else{
  document.querySelector("h1").textContent="Draw";
}
