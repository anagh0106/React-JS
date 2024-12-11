import React from 'react'

export const Content = (props) => {
    return (
        <div>
            {props.address.city}
            <br />
            {props.address.state}
            <br />
            {props.address.country}

        </div>
    )
}

// props(short for "properties") is a keyword in React used to pass data
// from a parent component to a child component.It is a fundamental concept
// in React's component-based architecture.