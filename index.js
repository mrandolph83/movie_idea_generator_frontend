const endPoint = "http://127.0.0.1:3000/api/v1/ideas";

document.addEventListener('DOMContentLoaded', () => {
  // global scope arrays
ideaArray = [] 
actionArray = []
comedyArray = []
dramaArray = []
familyArray = []
horrorArray = []
sciFiFantasyArray = []
sessionArray = []

  
  getIdeas()

  //  E.L. for user inputting data into Brainstormer form
   const userBrainstormerForm = document.querySelector("#brainstormer-user-edit")
   userBrainstormerForm.addEventListener("submit", (e) => 
   createFormHandler(e))
   

    //  E.L call for plot generator
    const plotGenerator = document.querySelector("#plot-gen-btn")
    plotGenerator.addEventListener("click", (e) => 
    plotGenerate(e))

    // E.L Call for Shufle Buttons
    let shuffleCharacter = document.getElementById('character-shuffle-btn')
    shuffleCharacter.addEventListener("click", (e) => 
    shuffleChar(e))
  
    let shuffleSetup = document.getElementById('setup-shuffle-btn')
    shuffleSetup.addEventListener("click", (e) => 
    shuffleSet(e))
  
    let shuffleTwist = document.getElementById('twist-shuffle-btn')
    shuffleTwist.addEventListener("click", (e) => 
    shuffleTwi(e))

    // E.L. for timers
  
    let startButton1 = document.querySelector("#timer-start-1")
    startButton1.addEventListener("click", (e) => 
    timer1(e))

    let startButton2 = document.querySelector("#timer-start-2")
    startButton2.addEventListener("click", (e) => 
    timer1(e))

    let startButton3 = document.querySelector("#timer-start-3")
    startButton3.addEventListener("click", (e) => 
    timer1(e))

    let startButton4 = document.querySelector("#timer-start-4")
    startButton4.addEventListener("click", (e) => 
    timer1(e))

    let startButton5 = document.querySelector("#timer-start-5")
    startButton5.addEventListener("click", (e) => 
    timer1(e))

    let startButton6 = document.querySelector("#timer-start-6")
    startButton6.addEventListener("click", (e) => 
    timer1(e))

    let startButton7 = document.querySelector("#timer-start-7")
    startButton7.addEventListener("click", (e) => 
    timer1(e))

    // E.L. for Brainstorm levels
    let brainstormLevel2 = document.querySelector("#plot-gen-btn-2")
    brainstormLevel2.addEventListener("click", (e) => 
   brainstormGenerate2(e))

   let brainstormLevel3 = document.querySelector("#plot-gen-btn-3")
   brainstormLevel3.addEventListener("click", (e) => 
  brainstormGenerate3(e))

  let brainstormLevel4 = document.querySelector("#plot-gen-btn-4")
  brainstormLevel4.addEventListener("click", (e) => 
 brainstormGenerate4(e))

 let brainstormLevel5 = document.querySelector("#plot-gen-btn-5")
  brainstormLevel5.addEventListener("click", (e) => 
 brainstormGenerate5(e))

 let brainstormLevel6 = document.querySelector("#plot-gen-btn-6")
  brainstormLevel6.addEventListener("click", (e) => 
 brainstormGenerate6(e))

 let brainstormLevel7 = document.querySelector("#plot-gen-btn-7")
 brainstormLevel7.addEventListener("click", (e) => 
brainstormGenerate7(e))

let brainstormLevel8 = document.querySelector("#plot-gen-btn-8")
brainstormLevel8.addEventListener("click", (e) => 
brainstormGenerate8(e))
  

  //  Start of Plot Generator Genre Entry
      const genreSelectionAction = document.querySelector("#genre-selection-action")
      genreSelectionAction.addEventListener("change", function(e){
        if(genreSelectionAction.checked){
            actionArray.forEach(actionIdea => {
              sessionArray.push(actionIdea);  
            })} 
            else {
              for( var i = 0; i < sessionArray.length; i++){ 
                if (sessionArray[i].genre_id === 1) { 
                    sessionArray.splice(i, 1); 
                    i--;}}}
       }) 
  
      const genreSelectionComedy = document.querySelector("#genre-selection-comedy")
      genreSelectionComedy.addEventListener("change", function(e){
        if(genreSelectionComedy.checked){
          comedyArray.forEach(comedyIdea => {
            sessionArray.push(comedyIdea);  
          })} 
          else {
            for( var i = 0; i < sessionArray.length; i++){ 
              if (sessionArray[i].genre_id === 2) { 
                  sessionArray.splice(i, 1); 
                  i--;}}}
        }) 

      const genreSelectionDrama = document.querySelector("#genre-selection-drama")
      genreSelectionDrama.addEventListener("change", function(e){
        if(genreSelectionDrama.checked){
          dramaArray.forEach(dramaIdea => {
            sessionArray.push(dramaIdea);  
          })} 
          else {
            for( var i = 0; i < sessionArray.length; i++){ 
              if (sessionArray[i].genre_id === 3) { 
                  sessionArray.splice(i, 1); 
                  i--;}}}
        }) 

      const genreSelectionFamily = document.querySelector("#genre-selection-family")
      genreSelectionFamily.addEventListener("change", function(e){
        if(genreSelectionFamily.checked){
          familyArray.forEach(familyIdea => {
            sessionArray.push(familyIdea);  
          })} 
          else {
            for( var i = 0; i < sessionArray.length; i++){ 
              if (sessionArray[i].genre_id === 4) { 
                  sessionArray.splice(i, 1); 
                  i--;}}}
        }) 

        const genreSelectionHorror = document.querySelector("#genre-selection-horror")
        genreSelectionHorror.addEventListener("change", function(e){
          if(genreSelectionHorror.checked){
            horrorArray.forEach(horrorIdea => {
              sessionArray.push(horrorIdea);  
            })} 
            else {
              for( var i = 0; i < sessionArray.length; i++){ 
                if (sessionArray[i].genre_id === 5) { 
                    sessionArray.splice(i, 1); 
                    i--;}}}
          }) 
        
        const genreSelectionSciFi = document.querySelector("#genre-selection-sci-fi")
        genreSelectionSciFi.addEventListener("change", function(e){
          if(genreSelectionSciFi.checked){
            sciFiFantasyArray.forEach(sciFiIdea => {
              sessionArray.push(sciFiIdea);  
            })} 
            else {
              for( var i = 0; i < sessionArray.length; i++){ 
                if (sessionArray[i].genre_id === 6) { 
                    sessionArray.splice(i, 1); 
                    i--;}}}
          }) 
// end of Plot Generator Genre Entry
})

// Fetch/get data from API
function getIdeas() {
  fetch(endPoint)
    .then(response => response.json())
    .then(ideas => {
     //  debugger
     ideas.data.forEach(idea => {
       
       let newIdea = new Idea(idea, idea.attributes);
       ideaArray.push(newIdea);

       ideaSorter(newIdea)

       function ideaSorter(newIdea) {
         
         if (newIdea.generator_default === true){
         if (newIdea.genre_id === 1) {
           actionArray.push(newIdea)
         }
         else if (newIdea.genre_id === 2) {
           comedyArray.push(newIdea)
           }
         else if (newIdea.genre_id === 3) {
           dramaArray.push(newIdea)
           }
         else if (newIdea.genre_id === 4) {
           familyArray.push(newIdea)
           }
         else if (newIdea.genre_id === 5) {
           horrorArray.push(newIdea)
           }
         else if (newIdea.genre_id === 6) {
           sciFiFantasyArray.push(newIdea)
           }}
       }
      })
    })
}


// Plot Generator function
function plotGenerate(e) {
  characterGenerate ()
  setupGenerate ()
  twistGenerate ()

 

  function characterGenerate (){
    let characterInterval = setInterval(characterSelections, 200)

    var audio = new Audio('sounds/PlotGen_SFX_v4.wav');
    audio.play();
    

      function characterSelections () {
        let endInt = sessionArray.length
        let i = Math.floor(Math.random() * endInt)
        document.querySelector("#character-gen").innerHTML = sessionArray[i].character;
        document.querySelector("#user-edit-character").innerHTML = sessionArray[i].character;
        // document.querySelector("#brainstorm-character-gen").innerHTML = sessionArray[i].character;
       
      }

     setTimeout(stopCharacter, 2500)

     function stopCharacter() {
       clearInterval(characterInterval)
     }
  }

  function setupGenerate (){
    let setupInterval = setInterval(setupSelections, 200)
      function setupSelections () {
        let endInt = sessionArray.length
        let i = Math.floor(Math.random() * endInt)
        document.querySelector("#setup-gen").innerHTML = sessionArray[i].setup;
        document.querySelector("#user-edit-setup").innerHTML = sessionArray[i].setup;
      }

     setTimeout(stopSetup, 3000)

     function stopSetup() {
       clearInterval(setupInterval)
     }
  }

  function twistGenerate (){
    let twistInterval = setInterval(twistSelections, 200)
      function twistSelections () {
        let endInt = sessionArray.length
        let i = Math.floor(Math.random() * endInt)
        document.querySelector("#twist-gen").innerHTML = sessionArray[i].twist;
        document.querySelector("#user-edit-twist").innerHTML = sessionArray[i].twist;
      }

     setTimeout(stopTwist, 3500)

     function stopTwist() {
       clearInterval(twistInterval)
     }
  }
}

// Event Listeners for PlotGen Shuffle



function shuffleChar(e) {

  let endInt = sessionArray.length
  let i = Math.floor(Math.random() * endInt)
  document.querySelector("#character-gen").innerHTML = sessionArray[i].character;
  document.querySelector("#user-edit-character").innerHTML = sessionArray[i].character;
  
}

function shuffleSet(e) {

let endInt = sessionArray.length
let i = Math.floor(Math.random() * endInt)
document.querySelector("#setup-gen").innerHTML = sessionArray[i].setup;
document.querySelector("#user-edit-setup").innerHTML = sessionArray[i].setup;
}

function shuffleTwi(e) {

let endInt = sessionArray.length
let i = Math.floor(Math.random() * endInt)
document.querySelector("#twist-gen").innerHTML = sessionArray[i].twist;
document.querySelector("#user-edit-twist").innerHTML = sessionArray[i].twist;
}


// BRainstorm level generators


function brainstormGenerate2 (e) {
  let answer1Return = document.querySelector("#brainfill1").value
  document.querySelector("#your-idea-1").innerHTML = answer1Return

  document.querySelector("#idea-header-1").innerHTML =  headerOne ()
  function headerOne () {
    return `Stream of Consciousness`
  }
  var audio = new Audio('sounds/Coin.mp3');
  audio.play();
}

function brainstormGenerate3 (e) {
  let answer2Return = document.querySelector("#brainfill2").value
  document.querySelector("#your-idea-2").innerHTML = answer2Return

  document.querySelector("#idea-header-2").innerHTML =  headerOne ()
  function headerOne () {
    return `Character Goals`
  }
  var audio = new Audio('sounds/Coin.mp3');
  audio.play();
}

function brainstormGenerate4 (e) {
  let answer3Return = document.querySelector("#brainfill3").value
  document.querySelector("#your-idea-3").innerHTML = answer3Return

  document.querySelector("#idea-header-3").innerHTML =  headerOne ()
  function headerOne () {
    return `Character Fears`
  }
  var audio = new Audio('sounds/Coin.mp3');
  audio.play();
}

function brainstormGenerate5 (e) {
  let answer4Return = document.querySelector("#brainfill4").value
  document.querySelector("#your-idea-4").innerHTML = answer4Return

  document.querySelector("#idea-header-4").innerHTML =  headerOne ()
  function headerOne () {
    return `Character Relations`
  }
  var audio = new Audio('sounds/Coin.mp3');
  audio.play();
}

function brainstormGenerate6 (e) {
  let answer5Return = document.querySelector("#brainfill5").value
  document.querySelector("#your-idea-5").innerHTML = answer5Return

  document.querySelector("#idea-header-5").innerHTML =  headerOne ()
  function headerOne () {
    return `Character Conflicts`
  }
  var audio = new Audio('sounds/Coin.mp3');
  audio.play();
}

function brainstormGenerate7 (e) {
  let answer6Return = document.querySelector("#brainfill6").value
  document.querySelector("#your-idea-6").innerHTML = answer6Return

  document.querySelector("#idea-header-6").innerHTML =  headerOne ()
  function headerOne () {
    return `Conflict Scenarios`
  }  
  var audio = new Audio('sounds/Coin.mp3');
  audio.play();
}

function brainstormGenerate8 (e) {
  let answer7Return = document.querySelector("#brainfill7").value
  document.querySelector("#your-idea-7").innerHTML = answer7Return

  document.querySelector("#idea-header-7").innerHTML =  headerOne ()
  function headerOne () {
    return `Point of View`
  } 
  var audio = new Audio('sounds/Section7Submit.wav');
  audio.play();
}


// Timer function
function timer1 () {

  
const startingMinutes = 15;
let time = startingMinutes * 60;
setInterval(updateCountdown, 1000);

function updateCountdown() {
  let countdownEl = document.querySelector("#time-left-display-1")
  

const minutes = Math.floor(time / 60);
let seconds = time % 60;

seconds = seconds < 10 ? '0' + seconds : seconds;

countdownEl.innerHTML = `⏰ ${minutes}:${seconds}`;

time --;

}
var audio = new Audio('sounds/ClockTick6.wav');
  audio.play();
}




 
//  Brainstormer form, making variables/values upon "submit"
  function createFormHandler(e) {
  e.preventDefault()
//  Add innerHTML apending to Brainstormer in this section
  const characterInput = document.querySelector("#user-edit-character").value
  const setupInput = document.querySelector("#user-edit-setup").value
  const twistInput = document.querySelector("#user-edit-twist").value
  const genreInput = document.querySelector("#user-edit-genre_id").value
  
  postIdea(characterInput, setupInput, twistInput, genreInput)
  }

 function postIdea(character, setup, twist, genre_id) {
  // confirm these values are coming through properly
  character = character;
  setup = setup;
  twist = twist;
  genre_id = genre_id;

  // build body object

  fetch(endPoint, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      character: character,
      setup: setup,
      twist: twist,
      genre_id: genre_id
    })
  })
  .then(response => response.json())
  .then(idea => {
   
    console.log(idea);
    const ideaData = idea.data
    // render JSON response
    let newIdea = new Idea(ideaData, ideaData.attributes)

    var audio = new Audio('sounds/Brainstorm_AdvanceSound.wav');
    audio.play();

    document.querySelector("#user-idea-selection").innerHTML =  newIdea.renderMovieIdea()
    document.querySelector("#your-idea-pitch").innerHTML =  newIdea.renderMovieIdea()
    
  })

  
}