import './Css/App.css';
import nyc from './Images/background.jpg'
import LA from './Images/LA.jpg'
import seattle from './Images/seattle.jpg'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function App() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])
  return (
    <div className='app-container'>
      <div className='app-header-text'>
        <h2 className='homepageText'>Your Home <br/> Improvement Specialist</h2>
      </div>
      <div className='app-centered-flex'>
        <div class="embla" ref={emblaRef}>
          <div class="embla__container">
            <div class="embla__slide">
              <img src={nyc} />
            </div>
            <div class="embla__slide">
              <img src={LA} />
            </div>
            <div class="embla__slide">
              <img src={seattle} />
            </div>
          </div>
        </div>
      </div>
      <div className='app-welcome-box'>
        <div className='app-welcome-textbox'>
          <h4 className='welcome-text'>ABOUT</h4>
          <h4 className='app-welcome-companyText'>Pat Moretti,<br/> inc.</h4>
        </div>
        <div className='app-welcome-descriptionbox'>
          <div className='app-welcome-paragraphbox'>
          <span className='welcome-description'>Pat Moretti, inc. Home Improvement Specialist, has been serving Westchester County, New York for over 25 years.</span>
          </div>
        </div>
      </div>
      <div className='app-projects-box'>
        </div>
    </div>

  );
}

export default App;
