import React from 'react';
import './Character.css';

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.character.name
    }
  }

  render() {
    return(
      <div className="character">
        <h2>{this.state.name}</h2>
      </div>
    )
  }
}

export default Character;
