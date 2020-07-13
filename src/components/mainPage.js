import React from 'react';
import CharacterCreator from './characterCreator';

export default function mainPage(props) {
    return (
        <div className='main-page-wrapper'>
            <h1>This is the main page</h1>
            <CharacterCreator />
        </div>
    )
}