document.addEventListener('DOMContentLoaded', () => {
   loadSite() 
})

    function loadSite(){
    fetch("http://127.0.0.1:3000/api/v1/ideas")
    .then(response => response.json())
    .then(ideas => {
       console.log(ideas)
    })
    }