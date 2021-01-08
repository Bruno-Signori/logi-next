import React from  'react';
import {Box, Divider, Grid, SimpleGrid, Text} from '@chakra-ui/core';


const MyFooter: React.FC = ()  => {
  return(
    <Box w="100%" bg="gray.900" h="300px" marginTop="50px" justifyContent="center" textAlign="center" justifyItems="center" flex="1">
    <Grid  alignItems="top"  templateColumns="repeat(4, 1fr)" gap={2}>
    <Box w="100%" >
    <Text marginTop="16px" fontWeight="bold" >PRODUCTS</Text>
      <Text fontSize="12px" marginTop="8px">Gaming</Text>
      <Text fontSize="12px" marginTop="8px">Graphic Design</Text>
      <Text fontSize="12px" marginTop="8px">Office</Text>
      <Text fontSize="12px" marginTop="8px">Family</Text>
      <Text fontSize="12px" marginTop="8px">Personalized</Text>



      
    </Box>
    <Box w="100%">
    <Text marginTop="16px" fontWeight="bold" >SHOWROOMS</Text>
      <Text fontSize="12px" marginTop="8px">Showroom Washington, DC</Text>
      <Text fontSize="12px" marginTop="8px">Showroom New York City</Text>
      <Text fontSize="12px" marginTop="8px">Showroom San Francisco</Text>
      <Text fontSize="12px" marginTop="8px">Showroom Hoston</Text>


      
    </Box>
    <Box w="100%" >
    <Text marginTop="16px" fontWeight="bold" >FAMILY MEMBERS</Text>
      <Text fontSize="12px" marginTop="8px">Electrons Softwares</Text>
      <Text fontSize="12px" marginTop="8px">Tera Tech Labu</Text>
      <Text fontSize="12px" marginTop="8px">TC Predator Gaming</Text>
      <Text fontSize="12px" marginTop="8px">SpacePlay</Text>
      <Text fontSize="12px" marginTop="8px">V-Poweration</Text>
      <Text fontSize="12px" marginTop="8px">AX3 AI System </Text>



      
    </Box>
    <Box w="100%" >
    <Text marginTop="16px" fontWeight="bold" >HELP CENTER</Text>
      <Text fontSize="12px" marginTop="8px">FAQs</Text>
      <Text fontSize="12px" marginTop="8px">Terms of Use</Text>
      <Text fontSize="12px" marginTop="8px">Terms of Use</Text>
      <Text fontSize="12px" marginTop="8px">privacy policy</Text>
      
    </Box>

  </Grid>
  <Divider backgroundColor="gray.800" fontWeight="bold" marginLeft="25vh" marginRight="25vh" marginTop="20px" />
  <Text fontSize="12px" marginTop="14px" fontWeight="300">COPYRIGTH 2020 TECHGEAR INC. ALL RIGTHS RESERVED</Text>

  </Box>
  )
}
export default MyFooter