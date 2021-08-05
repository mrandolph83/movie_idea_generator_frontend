

const endPoint = "http://127.0.0.1:3000/api/v1/ideas";

document.addEventListener('DOMContentLoaded', () => {
  // global scope array, contains every original idea content
  ideaArray = [] 
  sessionArray = []
  
  getIdeas()

  //  E.L. for user inputting data into Brainstormer form
   const userBrainstormerForm = document.querySelector("#brainstormer-user-edit")
   userBrainstormerForm.addEventListener("submit", (e) => 
   createFormHandler(e))

   const genreSelectionAction = document.querySelector("#genre-selection-action")
   genreSelectionAction.addEventListener("change", function(e){
     if(genreSelectionAction.checked){
       console.log("Action is checked")
     } 
      else {
       console.log("Noo action for you")
     }
   })
   




   
})



// Fetch/get data from API
 function getIdeas() {
   fetch(endPoint)
     .then(response => response.json())
     .then(ideas => {
      //  debugger
      ideas.data.forEach(idea => {
        // debugger
        let newIdea = new Idea(idea, idea.attributes);
        ideaArray.push(newIdea);


        
        // document.querySelector("#idea-container").innerHTML +=  newIdea.renderMovieIdea()
        
        // render(idea)
       })
     })
 }


//  Brainstormer form, making variables/values upon "submit"
  function createFormHandler(e) {
  e.preventDefault()
//  Add innerHTML apending to Brainstormer in this section
  const characterInput = document.querySelector("#character").value
  const setupInput = document.querySelector("#setup").value
  const twistInput = document.querySelector("#twist").value
  postIdea(characterInput, setupInput, twistInput)
  }

 function postIdea(character, setup, twist) {
  // confirm these values are coming through properly
  document.querySelector("#character-selection").innerHTML = character;
  document.querySelector("#setup-selection").innerHTML = setup;
  document.querySelector("#twist-selection").innerHTML = twist;

  // build body object

  fetch(endPoint, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      character: character,
      setup: setup,
      twist: twist,
      genre_id: 3
    })
  })
  .then(response => response.json())
  .then(idea => {
   
    console.log(idea);
    const ideaData = idea.data
    // render JSON response
    let newIdea = new Idea(ideaData, ideaData.attributes)
    
    document.querySelector("#idea-container").innerHTML +=  newIdea.renderMovieIdea()
  })
}

