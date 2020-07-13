import React from 'react';

export default function options(props) {
    return (
        <div className='options-wrapper'>
            <button onClick={props.handleFight}>Fight!</button>
            <button onClick={props.handleEat}>Eat</button>
            <button onClick={props.handleRest}>Rest</button>
        </div>
    )
}