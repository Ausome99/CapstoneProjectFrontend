import React, { Component } from 'react';

export default class CharacterCreator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            characterClass: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        
        fetch("http://127.0.0.1:5000/character/add", { 
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name: this.state.name,
                character_class: this.state.characterClass
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

        this.props.getCharacters()
    }

    render() {
        return (
            <div className='character-creator-wrapper'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                    <input type="text" value={this.state.characterClass} name="characterClass" onChange={this.handleChange} />
                    <button>Create Character</button>
                </form>
            </div>
        )
    }
}