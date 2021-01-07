import React from  'react';

import {Box, Button, Flex, Grid, Heading, Input, Link, Text, Icon, Image, SimpleGrid, Divider, Textarea} from '@chakra-ui/core'
import { motion, useCycle } from 'framer-motion'
import { FiAirplay, FiFacebook, FiGithub, FiInstagram, FiMail, FiPhone, FiSend, FiTwitter } from "react-icons/fi";
import DividerCustom from '../Divider';


const BoxMediaContacts: React.FC = () => {
  return (
   
    <Box height="350px" width="1200px" justifyContent="center" textAlign="center" justifyItems="center" flex="1" >
    <SimpleGrid justifyContent="center" columns={2} spacing={30}>
      <Box  height="350px" textAlign="left"  flex="1" justifyContent="space-between"
        
      >
        <Box >
        <Image  color="blue.300" src="/rocketseat.svg" alt='rock' />
        </Box>
        <SimpleGrid>
        <Text marginTop="14px" marginBottom="8px" fontWeight="bold">Direct Channels</Text>
        <Flex marginTop="10px">
        <Box color="blue.300" as={FiPhone} size="25px" ></Box>
              <DividerCustom  />
              <Text position="relative" left="-20px">(54) 99612-7617</Text>
              

            </Flex>
            <Flex>
            <Box as={FiMail} color='blue.300' size="25px" ></Box>
              <DividerCustom  />
              <Text position="relative" left="-20px">brunowsignori@gmail.com</Text>

            </Flex>

        <Text fontWeight="bold">Social media</Text>
        <Flex marginTop="12px">
              <Link href="http://instagram.com" >
              <Box as={FiInstagram} color='blue.300' size="20px" ></Box>
              <DividerCustom  />
              </Link> 
              
              <Link href="http://facebook.com">
              <Box left="-10px"as={FiFacebook} color='blue.300' size="20px" ></Box>
              <DividerCustom  />
              </Link> 
              
              <Link href="http://twitter.com">
              <Box as={FiTwitter} color='blue.300' size="20px" ></Box>
              <DividerCustom  />
              </Link> 

              <Link href="http://gmail.com">
              <Box as={FiSend} color='blue.300' size="20px" ></Box>
              <DividerCustom  />
              </Link> 

              <Link href="http://github.com">
              <Box as={FiGithub} color='blue.300' size="20px" ></Box>
              </Link> 


          </Flex>
       </SimpleGrid>
       </Box>
      <Box  height="350px"  borderRadius="12px" flex="1" justifyContent="space-between">
      <Text textAlign="left" marginBottom="12px" fontWeight="bold">Social media</Text>
      <Flex>
        <Input variant="outline" placeholder="Your name" fontWeight="normal" alignContent="left" borderRadius="2px"></Input>
        <Divider backgroundColor="blue.300" orientation="vertical" />
        <Input variant="outline" placeholder="Your email" type="email" fontWeight="normal" alignContent="left" borderRadius="2px"></Input>
      </Flex>
      <Input marginTop="20px" variant="outline" placeholder="Subject" type="email" fontWeight="normal" alignContent="left" borderRadius="2px"></Input>

      <Textarea marginTop="20px"  borderRadius="2px" placeholder="Message" />
      <Button  marginTop="12px"  width="350px"   backgroundColor="blue.300" >SUBMIT</Button>

        </Box>

</SimpleGrid>
</Box>

  )
} 

export default BoxMediaContacts;