import { useEffect, useRef, useState } from 'react'; 
import { useViewportSpy, useWillUnmount, useWindowScroll } from 'beautiful-react-hooks'; 
import { MenuMobile } from '../MenuMobile';
import FloatMenu from '../FloatingMenu'
import Image from 'next/image';
import { motion } from 'framer-motion';






const ViewportSpyComponent = () => {
  const [shouldShowsActions, setshouldShowsActions] = useState(false)
  const [lastYPos, setLostYPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
   const yPos = window.scrollY;
  const isScrollingUp = yPos > lastYPos;

  setshouldShowsActions(isScrollingUp)
  setLostYPos(yPos)
  }

  window.addEventListener('scroll', handleScroll, false);

  return () => {
    window.removeEventListener('scroll', handleScroll, false)
  }
  }, [lastYPos])

  const scrollAnimation= {

  }


   const ref = useRef();
   const isVisible = useViewportSpy(ref, {   threshold: [0, 0.25, 0.75, 1]},     );
      
   return (
     <div>
      <motion.div 
      className="actions"
      animate={{opacity: shouldShowsActions ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.7}}}
      ref={ref}  
      style={{position: 'absolute', top: '0', left: '0' , }}
      >
          <MenuMobile/>
      </motion.div>
       <div style={{margin: '60px 0'}}> 
          {isVisible ? "" : ''}
         
       </div>
     </div>
   );
};

<ViewportSpyComponent />

const NewComponet: React.FC = () => {
  return (
    <>
    <ViewportSpyComponent />
    </>
  )
}

export default NewComponet;