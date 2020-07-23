import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/main'>Main</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/api'>API page</Link></li>
            </ul>
        </div>
    )
}

export default Header;