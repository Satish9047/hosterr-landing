import React from 'react';
import "./navbar.scss";

const Navbar: React.FC = () => {
    return (
        <div className='navbar'>
            <div className='navbar__div'>
                <figure>
                    <img src='/src/assets/Logo.svg' alt='logo' />
                </figure>
                <span>Hosterr is Hiring</span>

            </div>
            <ul className='navbar__ul'>
                <li>Plan</li>
                <li>Find Domain</li>
                <li>Why Hosterr</li>
            </ul>
            <div>
                <button className='navbar__div-btn__sign-up'>Sign</button>
                <button className='navbar__div-btn__wait-list'>Join Waitlist</button>

            </div>
        </div>
    )
}

export default Navbar