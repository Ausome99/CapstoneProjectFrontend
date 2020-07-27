import React from 'react';

export default function signup(props) {
    const errorMessage = {
        "none": "",
        "blank field": "Please fill in all fields.",
        "mismatched passwords": "Passwords do not match. Please try again.",
        "fetch error": "An error occured. Please try again later.",
        "username taken": "Username already exists. Please try another one."
    }

    return (
        <div className="form-wrapper">
            <h3 className="welcome-message">Welcome To The Sword Of Nyovan!</h3>
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
                    <input 
                        type="password"
                        name="passwordConfirmInput" 
                        placeholder="Confirm Password" 
                        value={props.passwordConfirmInput}
                        onChange={props.handleChange}
                    />
                    <button>Sign Up</button>
                </div>
                <div className="message-wrapper">
                    <p className="error">{errorMessage[props.errorMessage]}</p>
                    <p onClick={props.handleClick}>Already have an account? Click here to login!</p>
                </div>
            </form>
        </div>    
    )
}