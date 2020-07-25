import React from 'react';

export default function login(props) {
    const errorMessage = {
        "none": "",
        "blank field": "Please fill in all fields.",
        "fetch error": "An error occured. Please try again later.",
        "not verified": "Incorrect username or password"
    }

    return (
        <div className="form-wrapper">
            <h3 className="welcome-message">Welcome To The Sword Of Nyonan!</h3>
            <form onSubmit={props.handleSubmit}>
                <div className="input-wrapper">
                    <input 
                        type="text" 
                        name="usernameInput" 
                        placeholder="Username" 
                        value={props.usernameInput}
                        onChange={props.handleChange}
                    />
                    <input 
                        type="password"
                        name="passwordInput" 
                        placeholder="Password" 
                        value={props.passwordInput}
                        onChange={props.handleChange}
                    />
                    <button>Login</button>
                </div>
                <div className="message-wrapper">
                    <p className="error">{errorMessage[props.errorMessage]}</p>
                    <p onClick={props.handleClick}>Don't have an account? Click here to sign up!</p>
                </div>
            </form>
        </div>
    )
}