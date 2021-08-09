class Idea {

  constructor(idea, ideaAttributes) {
    
    this.id = idea.id
    this.character = ideaAttributes.character
    this.setup = ideaAttributes.setup
    this.twist = ideaAttributes.twist
    this.genre_id = ideaAttributes.genre_id
    this.generator_default = false
    Idea.all.push(this)
    
  }

   renderMovieIdea() {
     
    return`
    <div data-id=${this.id}>
      <span style="color: #3772FF"><h4>${this.character}</h4></span>
      <span style="color: #FF3366"><h4>${this.setup}</h4></span>
      <span style="color: #2EC4B6"><h4>${this.twist}</h4></span>
    </div>`;
  
   }

}

Idea.all = [];