/*
Hey there bud




TRY TO CHEAT......





AND I WILL FIND WHERE YOU LIVE






DO NOT UNDERESTIMATE ME





I COME FROM A LONG LINE OF ASSASSINS 




WE ARE PRETTY RUTHLESS I PERSONALLY WOULDNT TRY IT IF I WERE YOU









fine have it ur way
*/
const inputField = document.querySelector("#myInput");
const riddle = document.querySelector("#riddle");
const buttonHolder = document.getElementById('buttonHolder');
const submit = document.getElementById('submit');
let riddleOne = false;


function myRiddleFunction() {
    if (riddleOne === false){
      
      if (inputField.value === "16"){
        riddle.innerHTML = "REMEMBER 2*2*2*2*2 RED BLUE RED YELLOW" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>";
          buttonHolder.innerHTML = "<button id = 'whatButton' class = 'button is-white'>WHAT</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'okButton' class = 'button is-white'>OK</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'numButton' class = 'button is-white'>32</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'rbrButton' class = 'button is-white'>RBR</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'sorryButton' class = 'button is-white'>IM SORRY</button>";
        submit.remove();
        inputField.remove();
        const okButton = document.getElementById('okButton');
        okButton.addEventListener("click", (e) => {
          buttonHolder.innerHTML = "";
       riddle.innerHTML = "<span><a href='levelshree.html'>#3</a>"  + "<br>" + "15-12=?" + "<br>" + "<br>" + "<button id = 'fiveButton' class = 'button is-white' style='width: 20%;'>5</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'twoFourButton' class = 'button is-white' style='width: 20%;'>24</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'decimalButton' class = 'button is-white' style='width: 20%;'>2.931</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'walrusButton' class = 'button is-white' style='width: 20%;'>walrus</button>"
          const fiveButton = document.querySelector('#fiveButton');
        fiveButton.addEventListener("click", (e) => {
          alert("its right infront of you")
        }) 
        const twoFourButton = document.querySelector('#twoFourButton');
        twoFourButton.addEventListener("click", (e) => {
          alert("LOLOLOLOLOLO")
        location.href = "https://www.youtube.com/watch?v=2x9GliYjFR0&ab_channel=MemeZee"
        })
        const decimalButton = document.querySelector('#decimalButton');
        decimalButton.addEventListener("click", (e) => {
          alert("its literally right there")
        })
        const walrusButton = document.querySelector('#walrusButton');
        walrusButton.addEventListener("click", (e) => {
          alert("WALRUS HAS BEEN SUMMONED.....")
        wrongAnswer.innerHTML = "<img src ='https://ichef.bbci.co.uk/news/976/cpsprodpb/18690/production/_126048999_gettyimages-1242108861.jpg'/>" + "<p>The mighty walrus says that your answer is right infront of you young padawan. It is up to YOU and only YOU to find it. You MEAN something. You are APPRECIATED. With determination you can do all things. Don't let this quiz fool you into thinking you aren't enough. CHASE that relationship. BUILD that website you always wanted. APPLY to your dream job. This is just %1 of the wisdom I carry. But what do I know. I'm just a fat walrus. Live on in peace my child. Refresh to continue.</p>"
        })
        })
        const wrongButton = document.querySelector('#whatButton');
        wrongButton.addEventListener("click", (e) => {
          alert("The most appropriate answer is okay.")
        location.href = "https://www.youtube.com/watch?v=RvBwypGUkPo"
        })
        const numButton = document.querySelector('#numButton');
        numButton.addEventListener("click", (e) => {
          alert("just answer nicely okay???")
        location.href = "https://www.youtube.com/watch?v=ZZ5LpwO-An4&ab_channel=ProtoOfSnagem"
        })
        const rbrButton = document.querySelector('#rbrButton');
        rbrButton.addEventListener("click", (e) => {
          alert("OK i bet your frustrated.. i just kinda dont care")
        location.href = "https://www.youtube.com/watch?v=eRBOgtp0Hac&ab_channel=carfreak0801"
        })
        const sorryButton = document.querySelector('#sorryButton');
        sorryButton.addEventListener("click", (e) => {
          alert("have it your way :D")
        wrongAnswer.innerHTML = "<img src ='https://www.popdust.com/media-library/image.jpg?id=23308746'/>"
        })
        }
      riddleOne = true;
    } else if (inputField.value !== "16"){
      alert('You sure? Like really sure?');
      } else if (inputField.value === "16"){
      riddle.innerHTML = "REMEMBER 2*2*2*2*2 RED BLUE RED YELLOW" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>";
          buttonHolder.innerHTML = "<button id = 'whatButton' class = 'button is-white'>WHAT</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'okButton' class = 'button is-white'>OK</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'numButton' class = 'button is-white'>32</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'rbrButton' class = 'button is-white'>RBR</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'sorryButton' class = 'button is-white'>IM SORRY</button>";
        submit.remove();
        inputField.remove();
        const okButton = document.getElementById('okButton');
        okButton.addEventListener("click", (e) => {
          //console.log("click");
          buttonHolder.innerHTML = "";
        riddle.innerHTML = "<span><a href='levelshree.html'>#3</a>"  + "<br>" + "15-12=?" + "<br>" + "<br>" + "<button id = 'fiveButton' class = 'button is-white' style='width: 20%;'>5</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'twoFourButton' class = 'button is-white' style='width: 20%;'>24</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'decimalButton' class = 'button is-white' style='width: 20%;'>2.931</button>" + "<div class='spaceBetweenElements'></div>" + "<button id = 'walrusButton' class = 'button is-white' style='width: 20%;'>walrus</button>"
          const fiveButton = document.querySelector('#fiveButton');
        fiveButton.addEventListener("click", (e) => {
          alert("its right infront of you")
        }) 
        const twoFourButton = document.querySelector('#twoFourButton');
        twoFourButton.addEventListener("click", (e) => {
          alert("LOLOLOLOLOLO")
        location.href = "https://www.youtube.com/watch?v=2x9GliYjFR0&ab_channel=MemeZee"
        })
        const decimalButton = document.querySelector('#decimalButton');
        decimalButton.addEventListener("click", (e) => {
          alert("its literally right there")
        })
        const walrusButton = document.querySelector('#walrusButton');
        walrusButton.addEventListener("click", (e) => {
          alert("WALRUS HAS BEEN SUMMONED.....");
        wrongAnswer.innerHTML = "<img src ='https://ichef.bbci.co.uk/news/976/cpsprodpb/18690/production/_126048999_gettyimages-1242108861.jpg'/>" + "<p>The mighty walrus says that your answer is right infront of you young padawan. It is up to YOU and only YOU to find it. You MEAN something. You are APPRECIATED. With determination you can do all things. Don't let this quiz fool you into thinking you aren't enough. CHASE that relationship. BUILD that website you always wanted. APPLY to your dream job. This is just %1 of the wisdom I have. But what do I know. I'm just a fat walrus. Live on in peace my child.</p>"
        })
        })
        const wrongButton = document.querySelector('#whatButton');
        wrongButton.addEventListener("click", (e) => {
          alert("The most appropriate answer is okay.")
        location.href = "https://www.youtube.com/watch?v=RvBwypGUkPo"
        })
        const numButton = document.querySelector('#numButton');
        numButton.addEventListener("click", (e) => {
          alert("just answer nicely okay???")
        location.href = "https://www.youtube.com/watch?v=ZZ5LpwO-An4&ab_channel=ProtoOfSnagem"
        })
        const rbrButton = document.querySelector('#rbrButton');
        rbrButton.addEventListener("click", (e) => {
          alert("OK i bet your frustrated.. i just kinda dont care")
        location.href = "https://www.youtube.com/watch?v=eRBOgtp0Hac&ab_channel=carfreak0801"
        })
        const sorryButton = document.querySelector('#sorryButton');
        sorryButton.addEventListener("click", (e) => {
          alert("have it your way :D")
        wrongAnswer.innerHTML = "<img src ='https://www.popdust.com/media-library/image.jpg?id=23308746'/>"
        })
      }
    };
