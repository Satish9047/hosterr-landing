import React from 'react';
import "./footer.scss";

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <ul className='footer__social'>
                <li><a href='#'>Facebook</a></li>
                <li><a href='#'>Instagram</a></li>
                <li><a href='#'>Twitter</a></li>
            </ul>

            <div className='footer__qa'>
                <figure>
                    <img src='./images/Help-Avatar.svg' alt='avatar' />

                </figure>
                <p>Have any question?<br />
                    <span>Talk to a specialist</span>
                </p>
            </div>
        </div>
    )
}

export default Footer