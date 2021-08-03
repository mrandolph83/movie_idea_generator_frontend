

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
   //  Do I want these in the global scope? try innerHTML within 
   // this function
    const characterInput = document.querySelector("#character").value
    const setupInput = document.querySelector("#setup").value
    const twistInput = document.querySelector("#twist").value
   postIdea(characterInput, setupInput, twistInput)
   }


    // Sending Post request to your API (backend create route)
    function postIdea(character, setup, twist) {
      // confirm these values are coming through properly
      console.log(character, setup, twist);
      // build body object
      let bodyData = {character, setup, twist}
    
      fetch(endPoint, {
        // POST request
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
      })
      
      .then(response => response.json())
      .then(idea => {
        console.log(idea);
        debugger
        // const ideaData = idea.data
        // // render JSON response
        // const ideaMarkup = `
        // <div data-id=${idea.id}>
        //   <img src=${ideaData.attributes.image_url} height="200" width="250">
        //   <h3>${ideaData.attributes.title}</h3>
        //   <p>${ideaData.attributes.category.name}</p>
        //   <button data-id=${ideaData.id}>edit</button>
        // </div>
        // <br><br>`;
    
        document.querySelector('#idea-container').innerHTML += ideaMarkup;
      })
    }
