import React from 'react';
import '../styles/Navbar.css';

function NavBar(){
    return(
        <section className='top'>
            <nav>
                <div className="left-side">
                    <a href="index.html" className="landing-direct">Blue Sci-fi</a>
                </div>
                <div className="right-side">
                    <ul className="navbar">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Social media</a></li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}

export default NavBar;