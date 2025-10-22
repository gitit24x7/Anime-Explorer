import {Link} from "react-router-dom";

function Navbar(){

    return (

        <div className="navbar">

            <div className="brand">
             <Link to="/home"><b>ANIME EXPLORER</b></Link>
            </div>
            
            <div className="navbar-links"> 
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
                <Link to="/about" className="nav-link">About</Link>
            </div>
        </div>
    )
}

export default Navbar;