import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Character from "./characterComponents/character";
import MainPage from "./mainPage";
import CharacterCreator from "./characterCreator";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      characterList: []
    }

    this.getCharacters = this.getCharacters.bind(this);
  }

  componentDidMount() {
    this.getCharacters()
  }

  getCharacters() {
    fetch("http://127.0.0.1:5000/character/get", { method: "GET" })
    .then(response => response.json())
    .then(data => this.setState({ characterList: data }))
    .catch(error => console.log(error))
  }

  renderCharacters() {
    return this.state.characterList.map(character => {
      return <Character 
                key={character.id}
                name={character.name}
                characterClass={character.character_class}
                hitpoints={character.hitpoints}
                id={character.id}
              />
    })
  }

  render() {
    return (
      <Router>
        
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/characterCreator" component={CharacterCreator} />
            <Route path="/main" component={MainPage} />
          </Switch>
      </Router>
    );
  }
}
