import '../Css/Header.css';
import { Link } from 'react-router-dom';
import moretti from '../Images/Moretti.png'
import phoneIcon from '../Images/phoneIcon.png'
function Header() {
  return (
    <div className="Header">
      <div className='nav-section'>
        <Link to="/">
          <img className='morettiLogo' src={moretti} alt='' />
        </Link>
        <ul className='navButton'>
          <li className='ref-list'>
            <Link to="/">
              <button className='nav-a'>Home</button>
            </Link>
          </li>
          <li className='ref-list'>
            <Link to="/services">
              <button className='nav-a'>Services</button>
            </Link>
          </li>
          <li className='ref-list'>
            <Link to="/about">
              <button className='nav-a'>Portfolio</button>
            </Link>
          </li>
          <li className='ref-list'>
            <Link to="/contact">
              <button className='nav-a'>Contact</button>
            </Link>
          </li>
        </ul>
        <div className='callNow'>
          <img className='phoneIcon' src={phoneIcon} alt='' />
          <a className='callNowText' href='tel:+19147388722'>1 (914) 738-8722</a>
        </div>
      </div>
    </div>
  );
}
export default Header;
