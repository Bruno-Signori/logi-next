import { Box, Image, SimpleGrid, Text } from '@chakra-ui/core';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from  'react';
import { useInView } from 'react-intersection-observer';



const BoxOneMouse = ["flex w-96  h-86 py-9 mt-16 mx-2 bg-gray-light rounded-xl justify-center " ];
const TextMouse =["text-center	font-semibold text-2xl tracking-wide"]

export const BoxMouse: React.FC = () => {
  const {ref, inView} = useInView({
    threshold: 0.1
  });

  const animation = useAnimation()
  useEffect(() => {
    if(inView){
      animation.start({
        y: '-90px',
        opacity: 1,
  
        transition: {
         opacity: 0,
         duration: 3
        }
      })
    
    }
    if (!inView) {
      animation.start({y: '-60px'
    })
    }
  }, [inView]);

  return (
  <div className="flex max-w-full h-auto justify-center  " >
    <div ref={ref} className="hidden:grid grid-cols-3 gap-10  md:grid grid-cols-2 gap-4" >
 
      <Box className={`${BoxOneMouse}`}>
        <Box >
        <motion.div animate={animation} whileHover={{ scale: 1.1,  }} transition={{ delay: 0.1, duration: 0.4 }} >   
            <Image size="250px"  position="relative"zIndex={9999}  src="/gaming.png" alt='rock' />
            </motion.div>

          <Text className={`${TextMouse}`}>  Gaming </Text>
        </Box>
      
      </Box>

  
      <Box className={`${BoxOneMouse}`}>
     
        <Box >
        <motion.div animate={animation} whileHover={{ scale: 1.1,  }} transition={{ delay: 0.1, duration: 0.4 }}>   
        <Image  size="250px" position="relative" zIndex={9999}  src="/design.png" alt='rock' />
        </motion.div>
        <Text className={`${TextMouse}`}>Graphic Design</Text>
        
        </Box>

      </Box>


      <Box className={`${BoxOneMouse}`}>
        <Box >
        <motion.div animate={animation} whileHover={{ scale: 1.1,  }} transition={{ delay: 0.1, duration: 0.4 }}>   
          <Image size="250px" position="relative"  src="/office.png" alt='rock' />
            </motion.div>
            <Text className={`${TextMouse}`}> Office & others</Text>
        </Box>    
      </Box>
 </div>
 </div>
  
  )};

export default BoxMouse;