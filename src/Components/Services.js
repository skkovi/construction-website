import '../Css/Services.css';
import kitchen2 from '../Images/kitchen2.png'
import paint from '../Images/paint.jpg'
import plumbing from '../Images/plumbing.webp'

function Services() {
  return (
    <div className='services-container'>
      <div className='services-header'>
        <div className='services-descriptionContainer'>
          <div className='services-titleContainer'>
            <h4 className='services-title2'>OUR</h4>
            <h2 className='services-title'>SERVICES</h2>
          </div>
          <div className='services-description'>
            <span className='services-descriptionText'>Our unified team of architects, designers, and construction professionals brings a thoughtful approach to your project as a whole, and to all the details that make your home feel uniquely yours. Each project we undertake starts with you – what are your needs, desires, and dreams for your home? Let’s explore how to make your home more livable and beautiful today.</span>
          </div>
        </div>
        <div className='services-cardContainerLarge'>
          <div className='services-cards'>
            <img className='services-images' src={kitchen2} alt='' />
            <div className='services-cardsTextContainer'>
              KITCHEN
            </div>
          </div>
          <div className='services-cards'>
            <img className='services-images' src={paint} alt='' />
            <div className='services-cardsTextContainer'>
              PAINTING
            </div>
          </div>
          <div className='services-cards'>
            <img className='services-images' src={plumbing} alt='' />
            <div className='services-cardsTextContainer'>
              PLUMBING
            </div>
          </div>
          <div className='services-specific'>
            <div className='services-textCards'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className='services-textCards'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className='services-textCards'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </div>
          <div className='services-cards'>
            <img className='services-images' src={kitchen2} alt='' />
            <div className='services-cardsTextContainer'>
              HELLO
            </div>
          </div>
          <div className='services-cards'>
            <img className='services-images' src={kitchen2} alt='' />
            <div className='services-cardsTextContainer'>
              HELLO
            </div>
          </div>
          <div className='services-cards'>
            <img className='services-images' src={kitchen2} alt='' />
            <div className='services-cardsTextContainer'>
              HELLO
            </div>
          </div>
          <div className='services-specific'>
            <div className='services-textCards'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className='services-textCards'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <div className='services-textCards'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;