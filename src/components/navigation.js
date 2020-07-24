import React from 'react';

export default function navigation(props) {
    
    return (
        <div className='navigation-wrapper'>
            <button onClick={() => props.handleSave()}>Save</button>
            <button onClick={() => props.handleLoad()}>Load</button>
            <button onClick={() => props.handleLogout()}>Logout</button>
        </div>
    )
}