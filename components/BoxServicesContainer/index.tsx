import React from  'react';
import {Box, Flex, Text, Image, SimpleGrid} from '@chakra-ui/core'
import {motion} from 'framer-motion'

// <Image size="150px" position="relative" top="-40px" float='left' src="/shield.png" alt='rock' />
const BoxOneServices = ["flex-1 max-w-full max-h-full py-4 my-7 mx-12 bg-gray-light rounded-xl md:mx-6" ]
export const BoxServicesContainer: React.FC = () => {
  return (
  <div className="flex max-w-full h-auto justify-center  " >
    <div className="hidden:grid grid-cols-2 gap-4 md:grid grid-cols-2 gap-4" >
      
      <Box className={`${BoxOneServices}`}>
        <Image size="150px" position="relative" top="-40px" float='left' src="/shield.png" alt='rock' />
        <Box >
          <Text className="tracking-wider"textAlign="left" marginBottom="12px" marginTop="10px" fontSize="2xl" fontWeight="600" >LifeTime Garantee</Text>
            <Text textAlign="left" marginRight="6px" color="gray.400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. </Text>
          </Box>
       </Box>
      

       <Box className={`${BoxOneServices}`}>
        <Image size="150px" position="relative" top="-40px" float='left' src="/price.png" alt='rock' />
          <Box >
            <Text className="tracking-wider" textAlign="left" marginBottom="12px" marginTop="10px" fontSize="2xl" fontWeight="600" >Good Price</Text>
            <Text textAlign="left" marginRight="6px" color="gray.400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. </Text>
          </Box>
      </Box>


      <Box className={`${BoxOneServices}`}>
       <Image size="150px" position="relative" top="-40px" float='left' src="/software.png" alt='rock' />
          <Box >
            <Text className="tracking-wider" textAlign="left" marginBottom="12px" marginTop="10px" fontSize="2xl" fontWeight="600" >Free Software Updates</Text>
            <Text textAlign="left" marginRight="6px" color="gray.400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. </Text>
          </Box>
      </Box>


      <Box className={`${BoxOneServices}`}>
      <Image size="150px" position="relative" top="-35px" float='left' src="/support.png" alt='rock' />
          <Box >
            <Text className="tracking-wider" textAlign="left" marginBottom="12px" marginTop="10px" fontSize="2xl" fontWeight="600" >24 / 7 Support</Text>
            <Text textAlign="left" marginRight="6px" color="gray.400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. </Text>
          </Box>
      </Box>

    </div>
  </div>

  )
}
export default BoxServicesContainer;