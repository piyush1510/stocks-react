import React, { Component } from 'react'
import './Chart.css'

export default class Chart extends Component {
    constructor(props){
        super(props)
        this.state = {labels: [], data: []};
    }
    render() {
        return (
            <div className="chart">

            </div>
        )
    }
}
