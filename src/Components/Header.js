import '../Css/Header.css';
import { Link } from 'react-router-dom';
import moretti from '../Images/Moretti.png'
import phoneIcon from '../Images/phoneIcon.png'
function Header() {
  return (
    <div className="Header">
      <div className='nav-section'>
        <nav>
          <Link to="/">
            <img className='morettiLogo' src={moretti} />
          </Link>
          <ul className='navButton'>
            <li className='ref-list'>
              <Link to="/">
                <a className='nav-a'>Home</a>
              </Link>
            </li>
            <li className='ref-list'>
              <Link to="/services">
                <a className='nav-a'>Services</a>
              </Link>
            </li>
            <li className='ref-list'>
              <Link to="/about">
                <a className='nav-a'>Portfolio</a>
              </Link>
            </li>
            <li className='ref-list'>
              <Link to="/contact">
                <a className='nav-a'>Contact</a>
              </Link>
            </li>
            <div className='callNow'>
              <img className='phoneIcon' src={phoneIcon} />
              <span>1 (914) 738-8722</span>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
