import "./Header.css";
import { NavLink } from "react-router-dom";


const Header = () => {


  return (
    <header>
        <h1>Videojuegos Kopos</h1>
       
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/tresenraya">Tres en raya</NavLink>
                </li>
                <li>
                    <NavLink to="/memoria">Memoria</NavLink>
                </li>
                
            </ul>
        </nav>   
       
    </header>
  )
}

export default Header