import '../Css/Gallery.css';
import { motion } from 'framer-motion'

function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} >
      <div className='gallery-container'>
        Under Construction
      </div>
    </motion.div>
  );
}

export default Portfolio;