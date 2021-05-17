import React from 'react'
import './Spinner.css'

export default function Spinner(props) {
    const radius = props.radius||50
    return (
        <div className="spinner" style={{width:radius,height:radius}}>
            
        </div>
    )
}
