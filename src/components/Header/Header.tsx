import React from 'react';
import "./header.scss";


const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className='header__div'>
                <h1 className='header__div--title'>Host your website in <br /> less than 5 minutes</h1>
                <p>With Hosterr, get your website up and running in no less then 5 minutes with the most competitive priccing packages available online</p>
                <div className='form'>
                    <input placeholder='Enter e-mail address' />
                    <button>Join Waitlist</button>
                </div>
                <div className='header__div__sub'>
                    <img src='/src/assets/Checkmark.svg' alt='check-mark' />
                    <p>No spam, ever. Unsubscribe anytime</p>
                </div>
            </div>
            <figure className=''>
                <img src='/src/assets/Hero Image (Model).png' alt='model' />
            </figure>
        </div>
    )
}

export default Header;