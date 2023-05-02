import '../Css/Services.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

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
            <div className='services-cardsTextContainer'>
              HELLO
            </div>
          </div>
          <div className='services-cards'>
            <div className='services-cardsTextContainer'>
              HELLO
            </div>
          </div>
          <div className='services-cards'>
            <div className='services-cardsTextContainer'>
              HELLO
            </div>
          </div>
          <div className='services-specific'>
            <div className='services-textCards'>
              Test
            </div>
            <div className='services-textCards'>
              Test
            </div>
            <div className='services-textCards'>
              Test
            </div>
          </div>
          <div className='services-cards'>
            <div className='services-cardsTextContainer'>
              HELLO
            </div>
          </div>
          <div className='services-cards'>
            <div className='services-cardsTextContainer'>
              HELLO
            </div>
          </div>
          <div className='services-cards'>
            <div className='services-cardsTextContainer'>
              HELLO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;