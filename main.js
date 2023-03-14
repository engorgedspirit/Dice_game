var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var dice=document.querySelector("#roll");
var hold=document.querySelector("#hold");
var para=document.querySelector("#score");
var turn=document.querySelector("#turn")
var div=document.querySelector(".scene");
var cube = document.querySelector('.cube');
var button=document.querySelector("#restart");
var popup=document.querySelector(".popup");
function openpopup(){
    popup.classList.add("open-popup");
    body.classList.toggle('active');
}
function closepopup(){
    popup.classList.remove("open-popup");
}
var currentClass = '';
let x;
let sum=0;
let tnode;
let trn=0;
let pl1=0;
let pl2=0;
button.style.display="none";
turn.innerHTML="Player-1"
dice.addEventListener("click",rollfun);
function rollfun() {
    rollDice();
    if(x!=1){
        sum+=x;
        check();
        tnode=document.createTextNode(" "+x);
        para.appendChild(tnode);
    }else if(x==1){
        tnode=document.createTextNode("You rolled a 1 \n Resetting..........")
        para.appendChild(tnode);
        dice.disabled=true;
        hold.disabled=true;
        setTimeout(() => { 
            reset();
            }, 1000); 
    }
}

function check(){
    if(trn==0){
        if(pl1+sum>=100){
            div.innerHTML="Congratulations, Player-1 Won the game!!"
            p1.innerHTML=pl1+sum;
            restart()
        }
    }else{
        if(pl2+sum>=100){
            div.innerHTML="Congratulations, Player-2 Won the game!!"
            p2.innerHTML=pl2+sum;
            restart();
        }
    }
    
}
hold.addEventListener("click",holdfun)
function holdfun(){
    if(trn==0){
        pl1+=sum
        p1.innerHTML=pl1;
        reset();
    }else{
        pl2+=sum
        p2.innerHTML=pl2;
        reset();
    }
}
function reset(){
    sum=0;
    if(trn==0){
        trn=1;
        turn.innerHTML="Player-2";
        para.innerHTML="score";
    }else{
        turn.innerHTML="Player-1";
        para.innerHTML="score";
        trn=0;
    }
     dice.disabled=false;
    hold.disabled=false;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function rollDice() {
 var randNum =getRandomInt(1,7);
 x=randNum; 
  console.log(randNum )
  var showClass = 'show-' + randNum;
  console.log(showClass)
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
currentClass = showClass;
}
rollDice();

function restart(){
    button.style.display="block";
    button.addEventListener("click",()=>{
        location.reload();
    })

}
document.onkeydown = function (e) {
    if(e.code=='Space'){
        rollfun();
    }else if(e.code=='Enter'){
        holdfun();
    }
  };