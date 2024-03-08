import React from 'react';
import "./navbar.scss";

const Navbar: React.FC = () => {
    return (
        <div className='navbar'>
            <div className='navbar__div'>
                <figure className='navbar__div__fig'>
                    <img className='img-logo' src='/images/Logo.svg' alt='logo' />
                </figure>
                <h2>Hosterr is Hiring!</h2>
            </div>

            <ul className='navbar__ul'>
                <li>Plan</li>
                <li>Find Domain</li>
                <li>Why Hosterr</li>
            </ul>

            <div className='navbar__div-btn'>
                <button className='navbar__div-btn__sign-up'>Sign in</button>
                <button className='navbar__div-btn__wait-list'>Join Waitlist</button>
            </div>

            <figure className='navbar__fig2'>
                <img className='img-menu' src='/images/menu.svg' alt='menu' />
            </figure>
        </div>
    )
}

export default Navbar