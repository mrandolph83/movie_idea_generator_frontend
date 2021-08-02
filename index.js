

const endPoint = "http://127.0.0.1:3000/api/v1/ideas"
document.addEventListener('DOMContentLoaded', () => {
   
   getIdeas()

   // E.L. for user inputting data into Brainstormer form
   const userBrainstormerForm = document.querySelector("#brainstormer-user-edit")
   userBrainstormerForm.addEventListener("submit", (e) => 
   createFormHandler(e))
})

// Fetch/get data from API
 function getIdeas() {
   fetch(endPoint)
     .then(res => res.json())
     .then(ideas => {
      //  debugger
      ideas.data.forEach(idea => {
         const ideaMarkup = `
           <div data-id=${idea.id}>
             <h3>${idea.attributes.character}</h3>
             <h3>${idea.attributes.setup}</h3>
             <h3>${idea.attributes.twist}</h3>
           </div>
           <br><br>`;
 
           document.querySelector('#idea-container').innerHTML += ideaMarkup
       })
     })
 }

//  Brainstormer form, making variables/values upon "submit"
 function createFormHandler(e) {
    e.preventDefault()
    const characterInput = document.querySelector("#character").value
    const setupInput = document.querySelector("#setup").value
    const twistInput = document.querySelector("#twist").value
   postFetch(characterInput, setupInput, twistInput)
   }

    function postFetch(characterInput, setupInput, twistInput) {
      console.log(characterInput, setupInput, twistInput)
    }
