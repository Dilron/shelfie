import React, {Component} from 'react'
import './Header.css'

export default class Header extends Component {
    render (){
        return (
            <div className='header-container'>
                <img className='shelfie-logo' src='https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/shelfie_icon.png' alt='shelfie logo'/>
                <h1 className='header-title'>SHELFIE</h1>
                <button className='dash-header-buttons'>Dashboard</button>
                <button className='dash-header-buttons'>Add Inventory</button>
            </div>
        )
    }
}