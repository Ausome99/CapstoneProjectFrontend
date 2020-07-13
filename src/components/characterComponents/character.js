import React, { Component } from 'react';

import Description from "./description";
import Options from "./options";

export default class Character extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            characterClass: props.characterClass,
            hitpoints: props.hitpoints,
            lastAction: ""
        }

        this.handleFight = this.handleFight.bind(this);
        this.handleEat = this.handleEat.bind(this);
        this.handleRest = this.handleRest.bind(this);
    }

    updateHitpoints(newHitpoints) {
        fetch(`http://127.0.0.1:5000/character/update/${this.props.id}`, { 
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ hitpoints: newHitpoints })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    handleFight() {
        this.setState({ 
            hitpoints: this.state.hitpoints - 10,
            lastAction: "Fight"
        })

        this.updateHitpoints(this.state.hitpoints - 10)
    }

    handleEat() {
        this.setState({ 
            hitpoints: this.state.hitpoints + 10,
            lastAction: "Eat"
        })

        this.updateHitpoints(this.state.hitpoints + 10)
    }

    handleRest() {
        this.setState({ 
            hitpoints: 100,
            lastAction: "Rest"
        })

        this.updateHitpoints(100)
    }



    render() {
        return (
            <div className='character-wrapper'>
                <Options
                    handleFight={this.handleFight}
                    handleEat={this.handleEat}
                    handleRest={this.handleRest}
                />
                <Description 
                    name={this.state.name}
                    characterClass={this.state.characterClass}
                    hitpoints={this.state.hitpoints}
                    lastAction={this.state.lastAction}
                />
            </div>
        )
    }
}