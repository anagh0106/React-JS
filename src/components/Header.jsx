import React from 'react'
import "../assests/css/Header.css"
export const Header = (x) => {
    return (
        <div className='header'>
            <h1>Header Component</h1>
            &nbsp;
            <h2>{x.title} </h2>
            <br />
            <h2>{x.city}</h2>
        </div>
    )
}
