import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import React from  'react';



const BoxOneMouse = ["flex w-96  h-86 py-9 mt-16 mx-2 bg-gray-light rounded-xl justify-center " ];
const TextMouse =["text-center	font-semibold text-2xl tracking-wide"]

export const BoxMouse: React.FC = () => {
  return (
<div className="flex max-w-full h-auto justify-center  " >
  <div className="hidden:grid grid-cols-3 gap-10  md:grid grid-cols-2 gap-4" >
 
      <Box className={`${BoxOneMouse}`}>
        <Box>
            <motion.div whileHover={{ scale: 1.2,  }} transition={{ delay: 0.3, duration: 0.3 }}>
            <Image size="250px"  position="relative" top="-90px" zIndex={9999}  src="/gaming.png" alt='rock' />
            </motion.div>

          <Text className={`${TextMouse}`}>  Gaming </Text>
        </Box>
      
      </Box>

  
      <Box className={`${BoxOneMouse}`}>
        <Box>
        <motion.div whileHover={{ scale: 1.2,  }} transition={{ delay: 0.2, duration: 0.3 }}>   
        <Image  size="250px" position="relative" top="-90px" zIndex={9999}  src="/design.png" alt='rock' />
        </motion.div>
        <Text className={`${TextMouse}`}>Graphic Design</Text>
        
        </Box>
      </Box>


      <Box className={`${BoxOneMouse}`}>
        <Box>
        <motion.div whileHover={{ scale: 1.2  }} transition={{ delay: 0.3, duration: 0.3 }}>   
          <Image size="250px" position="relative" top="-90px"  src="/office.png" alt='rock' />
            </motion.div>
            <Text className={`${TextMouse}`}> Office & others</Text>
        </Box>    
      </Box>

 </div>
 </div>
  
  )};

export default BoxMouse;