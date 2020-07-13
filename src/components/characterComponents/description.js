import React from 'react';

export default function description(props) {
    return (
        <div className='description-wrapper'>
            <h4>{props.name}</h4>
            <h4>{props.characterClass}</h4>
            <h4>{props.hitpoints}</h4>
            <h3>{props.lastAction}</h3>
        </div>
    )
}