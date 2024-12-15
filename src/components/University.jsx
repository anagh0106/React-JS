import React from 'react'
import { College } from './College'

export const University = () => {

    const clickme = () => {
        console.log("Click Me Button Clicked!")
    }

    return (
        <div>
            <button onClick={() => { clickme() }}>Click Here</button>
            <College click={clickme}></College>
        </div>
    )
}
