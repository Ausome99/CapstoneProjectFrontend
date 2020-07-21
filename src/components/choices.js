import React from 'react';

export default function choices(props) {
    return (
        <div className='choices-wrapper'>
            <button onClick={() => props.handlePageChange(props.goTo)}>{props.text}</button>
        </div>
    )
}