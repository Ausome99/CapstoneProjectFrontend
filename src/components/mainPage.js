import React, { Component } from 'react';

import Choices from "./choices";
import Navigation from "./navigation";

export default class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageName: "intro_page",
            text: "",
            choices: []
        }

        this.handlePageChange = this.handlePageChange.bind(this);
        this.renderChoices = this.renderChoices.bind(this);
    }

    componentDidMount() {
        this.handlePageChange(this.state.pageName);
    }

    handlePageChange(pageName) {
        // https://capstone-project-api-alm.herokuapp.com
        fetch(`https://capstone-project-api-alm.herokuapp.com/page/get/${pageName}`, { method: "GET" })
        .then(response => response.json())
        .then(data => {
            this.setState({
                pageName: data.page_name,
                text: data.text,
                choices: data.choices
            })
        })
        .catch(error => console.log(error))
    }

    renderChoices() {
        return this.state.choices.map(choice => {
            return <Choices 
            goTo={choice.go_to} 
            handlePageChange={this.handlePageChange}
            text={choice.text}
            />
        })
    }

    render() {
        return (
            <div className='everything-wrapper'>
                <div className='main-page-wrapper'>
                    <div className="navigation-bar-wrapper"><Navigation /></div>
                    <div className="adventure-wrapper">
                        <div className="adventure-text-area-wrapper">{this.state.text}</div>
                        <div className="adventure-button-wrapper">
                            {this.renderChoices()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}