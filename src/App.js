import './Css/App.css';
import nyc from './Images/background.jpg'
import LA from './Images/LA.jpg'
import seattle from './Images/seattle.jpg'
import kitchen from './Images/kitchen.webp'
import bathroom from './Images/bathroom.webp'
import addition from './Images/addition.webp'
import homePageImage from './Images/homePageImage.jpg'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

function App() {
  const { ref: headerRef, inView: headerView } = useInView();
  const { ref: aboutRef, inView: aboutView } = useInView();
  const { ref: cardRef, inView: cardView } = useInView();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])
  return (
    <motion.div className='app-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} >
      <div className='app-header-text'>
        <img className='mainPageImage' src={homePageImage} alt='' />
        <h2 ref={headerRef} className={`${'homepageText'} ${headerView ? 'animateHomePageText' : 'homepageText'}`}>Your Home <br /> Improvement Specialist</h2>
      </div>
      <div className='app-centered-flex'>
        <div class="embla" ref={emblaRef}>
          <div class="embla__container">
            <div class="embla__slide">
              <img src={nyc} alt='' />
            </div>
            <div class="embla__slide">
              <img src={LA} alt='' />
            </div>
            <div class="embla__slide">
              <img src={seattle} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='app-welcome-box'>
        <div ref={aboutRef} className={`${'app-welcome-boxSize'} ${aboutView ? 'animate-app-welcome-boxSize' : ''}`}>
          <div className='app-welcome-textbox'>
            <h4 className='app-welcome-text'>ABOUT</h4>
            <h4 className='app-welcome-companyText'>Pat Moretti,<br /> inc.</h4>
          </div>
          <div className='app-welcome-descriptionbox'>
            <div className='app-welcome-paragraphbox'>
              <span className='app-welcome-description'>Pat Moretti, inc. Home Improvement Specialist, has been serving Westchester County, New York for over 25 years.</span>
            </div>
          </div>
        </div>
      </div>
      <div className='app-projects-box'>
        <div className='app-projects-textbox'>
          <h2 className='app-projects-text'>Our Products</h2>
        </div>
        <div className='app-projects-flex'>
          <ul ref={cardRef} className='app-projects-cardbox'>
            <li className={`${'app-projects-flexbox'} ${cardView ? 'animate-app-projects-flexbox' : ''}`}>
              <img class='cardImages' src={kitchen} alt='' />
              <span className='app-projects-names'>KITCHENS</span>
            </li>
            <li className={`${'app-projects-flexbox'} ${cardView ? 'animate-app-projects-flexbox' : ''}`}>
              <img class='cardImages' src={bathroom} alt='' />
              <span className='app-projects-names'>BATHROOMS</span>
            </li>
            <li className={`${'app-projects-flexbox'} ${cardView ? 'animate-app-projects-flexbox' : ''}`}>
              <img class='cardImages' src={addition} alt='' />
              <span className='app-projects-names'>ADDITIONS</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div >

  );
}

export default App;
