import React from 'react';
import '../styles/Navbar.css';

function NavBar(){
    return(
        <section className='top'>
            <header>
                <p><a href="index.html" className="landing-direct">Blue Sci-fi</a></p>
                    <ul className="navbar">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Social media</a></li>
                    </ul>
            </header>
        </section>
    );
}

export default NavBar;