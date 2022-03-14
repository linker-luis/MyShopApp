import React from 'react'

function Title({title}) {
    return (
        <div className = 'title'>
            <h2>{title}</h2>
            <div className = 'separator'></div>
        </div>
    )
}

export default Title
