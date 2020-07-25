import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul>
                {/* Home */}
                <li><Link to='/'>Home</Link></li>

                {/* General */}
                <li><Link to='/recent'>Recent</Link></li>
                <li><Link to='/popular'>Most popular</Link></li>
                <li><Link to='/archive'>Archive</Link></li>
                <li><Link to='/'>Useful stuff</Link></li>
                <li><Link to='/uploads'>Uploads</Link></li>
                <li><Link to='/donate'>Donate</Link></li>
                <li><Link to='/info'>Info</Link></li>

                {/* Ratings */}
                <li><Link to='/daily-rating'>Daily</Link></li>
                <li><Link to='/weekly-rating'>Weekly</Link></li>
                <li><Link to='/monthly-rating'>Monthly</Link></li>
                <li><Link to='/yearly-rating'>Yearly</Link></li>
                <li><Link to='/custom-rating'>Custom</Link></li>
                <li><Link to='/averages'>Averages</Link></li>

                {/* Search */}
                <li><Link to='/search'>Search</Link></li>

                {/* Dev test */}
                <li><Link to='/main'>Main</Link></li>                
                <li><Link to='/api'>API page</Link></li>
            </ul>
        </div>
    )
}

export default Header;