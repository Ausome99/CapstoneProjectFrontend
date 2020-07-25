import React, { Component } from 'react';
import Cookies from "js-cookie";

import Choices from "./choices";
import Navigation from "./navigation";

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.baseUrl="https://capstone-project-api-alm.herokuapp.com/"
        // this.baseUrl="http://127.0.0.1:5000/"
        if (!Cookies.get("username")) {
            props.history.push("/")
          }

        this.state = {
            pageName: "intro_page",
            text: "",
            choices: []
        }

        this.handlePageChange = this.handlePageChange.bind(this);
        this.renderChoices = this.renderChoices.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        this.handlePageChange(this.state.pageName);
    }

    handlePageChange(pageName) {
        fetch(`${this.baseUrl}page/get/${pageName}`, { method: "GET" })
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

    handleSave() {
        const cookieUsername = Cookies.get("username")
        fetch(`${this.baseUrl}save`, { 
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                username: cookieUsername,
                page_name: this.state.pageName
            }) 
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))
    }

    handleLoad() {
        const cookieUsername = Cookies.get("username")
        fetch(`${this.baseUrl}load/${cookieUsername}`, { method: "GET" })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                pageName: data.page_name,
            })
            this.handlePageChange(this.state.pageName);
        })
        .catch(error => console.log(error))
    }

    handleLogout() {
        Cookies.remove("username")
        this.props.history.push("/")
      }

    render() {
        return (
            <div className='everything-wrapper'>
                <div className='main-page-wrapper'>
                    <div className="navigation-bar-wrapper"><Navigation 
                                                                handleLogout={this.handleLogout}
                                                                handleSave={this.handleSave}
                                                                handleLoad={this.handleLoad}
                                                            />
                                                            </div>
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