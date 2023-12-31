import React from "react";
import './navbar.styles.css';

const Navbar = ({darkTheme}) => {
    
    return (
         <section className={ `navbar-container ${darkTheme ? 'background-dark relative':'background-transparent' } ` }>
        
            <div className="container flex justify between align-center">
       {/* <h2>Navbar</h2> */}
<a href="#" className="logo">Book<span className="text-primary">worm</span></a>

<nav className="nav-links-container">
<a href="#" className="nav-links">Home</a>
<a href="#" className="nav-links">Books</a>
</nav>
       </div>
       </section>
    )
}

export default Navbar;