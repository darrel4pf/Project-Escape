let inputField1 = document.querySelector("#myInput");
let riddle = document.querySelector("#riddle");
let riddleOneDone = false;
let riddleTwoDone = false;
let riddleThreeDone = false;
let hints = document.getElementById('hints');
const submitbutton = document.getElementById('submit');
console.log('test');

function riddleFunction() {
  console.log("button");
  if (!riddleOneDone) {
    if (inputField1.value.toLowerCase() === "keyboard" || inputField1.value.toLowerCase() === "a keyboard") {
      riddle.innerHTML = "Though liquid in nature" + "<br>" + "don't push me too far" + "<br>" + "for then I will break" + "<br>" + "and the damage may scar." + "<br>" + "What am I?";
      riddleOneDone = true;
    }
  }
  else if (riddleOneDone && !riddleTwoDone) {
    if (inputField1.value.toLowerCase() === "glass") {
      riddle.innerHTML = "I am as simple as a circle" + "<br>" + "worthless as a leader" + "<br>" + "but when I follow a group" + "<br>" + "their strength increases tenfold." + "<br>" + "By myself, I'm practically nothing." + "<br>" + "What am I?";
      riddleTwoDone = true;
    }
  }
  else if (riddleOneDone && riddleTwoDone && !riddleThreeDone) {
    if (inputField1.value.toLowerCase() === "zero" || inputField1.value === "0") {
      riddle.innerHTML = "Congratulations! You passed level one! Click the button to advance to the next stage.";
      riddleThreeDone = true;
      inputField1.remove();
      submitbutton.innerText = "Next stage";
    }
  }
  else {
    if (riddleThreeDone) {
      window.location.href = "leveltwo.html";
    }
  }
  inputField1.value = "";
}

function hint() {
  console.log("hint");
  if (!riddleOneDone) {
    alert("What do you use to type?");
  }
  else if (riddleOneDone && !riddleTwoDone) {
    alert("What is your window made of?");
  }
  else if (riddleOneDone && riddleTwoDone && !riddleThreeDone) {
    alert("What number can you not divide by?");
  }
  else {
    alert("Move on to the next stage, there is nothing here for you")
  }
}


