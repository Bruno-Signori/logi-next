import React from  'react';
import {Box, Flex, Text, Image, SimpleGrid} from '@chakra-ui/core'

// <Image size="150px" position="relative" top="-40px" float='left' src="/shield.png" alt='rock' />
export const BoxServicesContainer: React.FC = () => {
  return (
  <Flex width="1200px" align="center" justify="center" justifyContent="center">
    <SimpleGrid justifyContent="center" columns={2} spacing={10}>

      <Box bg="gray.600" height="220px"  borderRadius="12px" flex="1" justifyContent="space-between">
        <Image size="150px" position="relative" top="-35px" float='left' src="/shield.png" alt='rock' />
        <Box >
          <Text textAlign="left" marginBottom="12px" marginTop="18px" fontSize="2xl" fontWeight="600" >LifeTime Garantee</Text>
            <Text textAlign="left" marginRight="6px" color="gray.400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Text>
          </Box>
       </Box>
      

      <Box bg="gray.600" height="220px"  borderRadius="12px" flex="1" justifyContent="space-between">
        <Image size="150px" position="relative" top="-35px" float='left' src="/price.png" alt='rock' />
          <Box >
            <Text textAlign="left" marginBottom="12px" marginTop="18px" fontSize="2xl" fontWeight="600" >Good Price</Text>
            <Text textAlign="left" marginRight="6px" color="gray.400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Text>
          </Box>
      </Box>


      <Box bg="gray.600" height="220px"  borderRadius="12px" flex="1" justifyContent="space-between">
        <Image size="150px" position="relative" top="-35px" float='left' src="/software.png" alt='rock' />
          <Box >
            <Text textAlign="left" marginBottom="12px" marginTop="18px" fontSize="2xl" fontWeight="600" >Free Software Updates</Text>
            <Text textAlign="left" marginRight="6px" color="gray.400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Text>
          </Box>
      </Box>


      <Box bg="gray.600" height="220px"  borderRadius="12px" flex="1" justifyContent="space-between">
       <Image size="150px" position="relative" top="-35px" float='left' src="/support.png" alt='rock' />
          <Box >
            <Text textAlign="left" marginBottom="12px" marginTop="18px" fontSize="2xl" fontWeight="600" >24 / 7 Support</Text>
            <Text textAlign="left" marginRight="6px" color="gray.400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Text>
          </Box>
      </Box>

    </SimpleGrid>
  </Flex>

  )
}
export default BoxServicesContainer;