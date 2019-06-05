var green = document.querySelector(".green");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");
var button=document.querySelector("#button");
var allbtn=document.querySelectorAll(".btn");

var all=[blue,red,yellow,green]
var colors = ["blue1", "red1", "yellow1", "green1"];

var generatedColor=[];
var guesses=[];

function game(){

  var color=Math.round(Math.random()*3)
  var all2=all[color]
  var colorShine=colors[color];
  generatedColor.push(colorShine);
  console.log(colorShine);

  all2.classList.add(`${colorShine}`)
  setTimeout(function(){
        all2.classList.remove(`${colorShine}`)
      },1000);
  setTimeout(function(){
    continuePlaying();
  },2000)
}

function continuePlaying(){
  if(generatedColor.length<4){
    game();
  }else{
    alert("YOUR TURN");
    show();
  }
}

function show(){
  console.log(this.getAttribute('value'))
  var choice=this.getAttribute("value");

  guesses.push(choice);
  if(guesses.length==4){

    if(guesses[0]==generatedColor[0]&&guesses[1]==generatedColor[1]&&guesses[2]==generatedColor[2]&&guesses[3]==generatedColor[3]){
      alert("YOU WIN")
    }else{
      alert("YOU LOOSE")
    }

  }
}


button.addEventListener("click",game, {once:true})

allbtn.forEach(but=>{
  but.addEventListener("click",show)
})
