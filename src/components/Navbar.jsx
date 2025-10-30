import {Link} from "react-router-dom";
import Hiddengems from "./pages/Hidden-Gems";

function Navbar(){

    return (

        <div className="navbar">

            <div className="brand">
             <Link to="/home"><b>ANIME EXPLORER</b></Link>
            </div>
            
            <div className="navbar-links"> 
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
                <Link to="/Hiddengems" className="nav-link">Hidden-Gems</Link>
                <Link to="/about" className="nav-link">About</Link>
            </div>
        </div>
    )
}

export default Navbar;