import '../Css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
        <nav className="nav-section">
            <ul>
                <li className ='ref-list'>
                    <Link to="/contact">
                    <a>Company</a>
                    </Link>
                    </li>
                    <li className ='ref-list'>
                    <a href="https://www.epsteinglobal.com/company">Services</a>
                    </li>
                    <li className ='ref-list'>
                    <a href="https://www.epsteinglobal.com/company">Portfolio</a>
                    </li>
                    <li className ='ref-list'>
                    <a href="https://www.epsteinglobal.com/company">Contact</a>
                    </li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
