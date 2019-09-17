import React from 'react'
const introInstruction = (props) => (
    <div
        style={{
            textAlign: 'center',
            fontSize: '3em',
            color: '#cccccc',
            marginTop: '20px'
        }}>
        {props.txt}
    </div>)

export default introInstruction;