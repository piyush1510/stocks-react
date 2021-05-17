import React, { Component } from 'react'
import './SideNav.css'
import {NavLink} from 'react-router-dom'

export default class SideNav extends Component {
    render() {
        return (
            <div className="SideNav">
                <NavLink exact activeClassName="active" to="/">IBM</NavLink>
                <NavLink exact activeClassName="active" to="/reliance">Reliance</NavLink>
                <NavLink exact activeClassName="active" to="/tcs">TCS</NavLink>
                <NavLink exact activeClassName="active" to="/hdfc">HDFC</NavLink>
                <NavLink exact activeClassName="active" to="/itc">ITC</NavLink>
            </div>
        )
    }
}
