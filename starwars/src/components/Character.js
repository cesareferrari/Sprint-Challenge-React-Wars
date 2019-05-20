import React from 'react';
import './Character.css';

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.character.name,
      details: {
        height: props.character.height,
        mass: props.character.mass,
        hair_color: props.character.hair_color,
        skin_color: props.character.skin_color,
        eye_color: props.character.eye_color,
        birth_year: props.character.birth_year
      }
    }
  }

  render() {
    return(
      <div className="character">
        <h2>{this.state.name}</h2>

        <div className="details">
          <div className="detail">
            Height: {this.state.details.height}
          </div>
          <div className="detail">
            Mass: {this.state.details.mass}
          </div>
          <div className="detail">
            Hair color: {this.state.details.hair_color}
          </div>
          <div className="detail">
            Skin color: {this.state.details.skin_color}
          </div>
          <div className="detail">
            Eye color: {this.state.details.eye_color}
          </div>
          <div className="detail">
            Birth year: {this.state.details.birth_year}
          </div>

        </div>
      </div>
    )
  }
}

export default Character;
