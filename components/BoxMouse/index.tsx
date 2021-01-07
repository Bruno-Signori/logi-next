import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import React from  'react';




export const BoxMouse: React.FC = () => {
  return (
 <SimpleGrid columns={3} spacing={10} marginTop={150}> 
 
   <Flex h="280px" borderRadius="12px" backgroundColor="gray.600" align="center" justify="center" border="none">
     <Box>
        <motion.div
          whileHover={{ scale: 1.2,  }}
          transition={{ delay: 0.3, duration: 0.3 }}>
          
        <Image size="230px" borderBottom="2px solid gray.900" position="relative" top="-80px" zIndex={9999}  src="/gaming.png" alt='rock' />
        </motion.div>

       <Text fontWeight="600" fontSize="20px" textAlign="center">  Gaming </Text>
     </Box>
   
   </Flex>

   <Flex
   h="280px"
   borderRadius="12px"
   backgroundColor="gray.600"
   align="center" justify="center"
   border="none"
   
   >
     <Box >
     <motion.div
 whileHover={{ scale: 1.2,  }}
 transition={{ delay: 0.3, duration: 0.3 }}

 
>
      
  <Image  size="230px" position="relative" top="-80px" zIndex={9999}  src="/design.png" alt='rock' />
  </motion.div>

  <Text fontWeight="600" fontSize="20px" textAlign="center"  > 
       Graphic Design
     </Text>
     </Box>
   
   </Flex>

   <Flex
   h="280px"
   
   borderRadius="12px"
   backgroundColor="gray.600"
   align="center" justify="center"
   border="none"
   
   >
     <Box>
     <motion.div
 whileHover={{ scale: 1.2  }}
 transition={{ delay: 0.3, duration: 0.3 }}
 
 

 
>
      
      <Image size="230px" position="relative" top="-80px"  src="/office.png" alt='rock' />
  </motion.div>

     <Text fontWeight="600" fontSize="20px" textAlign="center"  > 
       Office & others
     </Text>
     </Box>
   
   </Flex>

 </SimpleGrid>
  
  )};

export default BoxMouse;