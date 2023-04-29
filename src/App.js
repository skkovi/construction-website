import './Css/App.css';
import nyc from './Images/background.jpg'
import LA from './Images/LA.jpg'
import seattle from './Images/seattle.jpg'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function App() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 4000})])
  return (
    <div className='app-container'>
      <div className='app-header-text'>
          <h2>Your Home Improvement Specialist</h2>
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
    </div>

  );
}

export default App;
