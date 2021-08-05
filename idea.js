class Idea {

  constructor(idea, ideaAttributes) {
    
    this.id = idea.id
    this.character = ideaAttributes.character
    this.setup = ideaAttributes.setup
    this.twist = ideaAttributes.twist
    this.genre_id = ideaAttributes.genre_id
    Idea.all.push(this)
    
  }

   renderMovieIdea() {
     
    return`
    <div data-id=${this.id}>
      <h3>${this.character}</h3>
      <h3>${this.setup}</h3>
      <h3>${this.twist}</h3>
    </div>
    <br><br>`;
  
   }

}

Idea.all = [];
                            