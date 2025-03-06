let button = document.querySelector("#color");
let body = document.querySelector("#remember");
const colors = [];
let dogpet = false;


const secretCode = "redblueredyellow";

var audio = new Audio('bark.mp3');
var wrong = new Audio('wrong.mp3');

console.log('test');


const red = document.getElementById('red');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const purple = document.getElementById('purple');

const pet = document.getElementById('dog');

pet.addEventListener('click', (e) => {
  audio.play();
  dogpet = true;
});

red.addEventListener('click', (e) => {
 colors.push('red');
 console.log(colors);
 let attemptedSecret = colors.slice(-secretCode.length);
  if(colors.length > 3){
    alert("you did not remember...");
  location.href = "https://www.youtube.com/watch?v=YdrPb3QderI&list=LL&index=66"
  }
});

blue.addEventListener('click', (e) => {
 colors.push('blue');
 console.log(colors);
 let attemptedSecret = colors.slice(-secretCode.length);
  if(colors.length > 3){
    alert("you did not remember...");
  location.href = "https://www.youtube.com/watch?v=YdrPb3QderI&list=LL&index=66"
  }
});

yellow.addEventListener('click', (e) => {
 colors.push('yellow');
 console.log(colors);
 let attemptedSecret = colors.slice(-secretCode.length);
  if (attemptedSecret.join("") === secretCode) {
    location.href = "victory.html";
  }
  else if(colors.length > 3){
    alert("you did not remember...");
  location.href = "https://www.youtube.com/watch?v=YdrPb3QderI&list=LL&index=66"
  }
});

purple.addEventListener('click', (e) => {
  alert("you did not remember...");
  location.href = "https://www.youtube.com/watch?v=YdrPb3QderI&list=LL&index=66"
});

function wrongFunction(){
  alert("pet the dog before moving on jerk");
  location.href = "https://www.youtube.com/watch?v=8ybW48rKBME"
}

function dogFunction() {
  if(dogpet === true){
    document.getElementById('dog').style.display = 'none';
  document.getElementById('riddle').style.display = 'none';
  button.classList.remove("hidden");
  body.classList.remove("hidden");
  }
  else
  {
     alert("pet the dog before moving on jerk");
     location.href = "https://www.youtube.com/watch?v=8ybW48rKBME"
  }
  
}




