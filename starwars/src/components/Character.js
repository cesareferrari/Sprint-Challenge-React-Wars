import React from 'react';
import './Character.css';
import Film from './Film';

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.character.name,
      filmUrls: props.character.films,
      films: [],
      isLoading: false,
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

  componentDidMount() {
    this.setState({ isLoading: true});

    this.state.filmUrls.forEach(url => {
      this.getFilm(url);
    });
  }

  getFilm = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ films: [...this.state.films, data], isLoading: false }))
      .catch(error => {throw new Error(error)});
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

        <div className="film">
          <h3>Films</h3>
          { this.state.isLoading ? "Loading..." : this.state.films.map(film => <Film key={film.url} filmTitle={film.title} />) }
        </div>
      </div>
    )
  }
}

export default Character;
