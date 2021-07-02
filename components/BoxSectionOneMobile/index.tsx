import { Box, Button, Heading, Text } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import React from  'react';

export const SectionOneMobile: React.FC = () => {
  const property = {
    title: "Logitech's High Performance Wirelees Gamming Mouse ",
  };
  return (
    
      <Box className="block  md:hidden  max-w-7xl flex-row  justify-center items-center"  >
        <Box className="flex pb-36 px-10 ml-5  justify-center  justify-items-center  md:hidden  " >

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{  ease: "easeIn", delay: 1.5, duration: 1.9 }}>
        <Box className="relative top-24 min-w-full max-h-full h-auto items-center" >
          </Box>
            <Box className="flex-row justify-center justify-items-center max-w-full  " >   
            <Text className="relative text-center tracking-tight text-9xl top-16  h-full font-semibold w-max max-w-full"  color="blue.300"    >G502</Text>
            <Box className="flex justify-center justify-items-center  items-center max-w-full ">
          <img className="z-50 "  width={300} height={210}   src="/g502-mobile.png" alt='rock' />
          </Box>
          </Box>
        </motion.div>
      </Box>
       
      <Box className="md:flex max-w-full  h-full pl-8  w-auto " >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 0.7, duration: 1.9 }} >

       < Heading className="tracking-wider " fontSize="4xl">G502 HERO WIRELLES</Heading>
       </motion.div >

       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1.9 }} >
       <Text className="tracking-widest " marginTop={4} fontSize="2xl">{property.title}</Text>
       <Text marginTop={8} fontSize="2xl">The Razer Ouraboras is outfitted whit the most advanced & configurable sensor, the all-new 8200dpi 4G sensor.It tracks so precisely, you always hit target exactly where you need to. </Text>
       <Text className="tracking-widest " color="blue.300"   marginTop={4} fontSize="2xl">USD 99.99</Text>
       </motion.div> 

       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1 }} >
       <Box className="flex place-items-auto" marginTop={4} flex="1">
           <Button leftIcon="check" variant="solid" marginRight={6} backgroundColor="blue.300" borderColor="blue.300" border="1px solid #19B5FE">
           Add To Cart
           </Button>
           <Button rightIcon="arrow-forward" variant="ghost"   borderColor="white.300" border="1px solid">
           More Details 
           </Button>
         
       </Box>
       </motion.div>
     </Box>

   
   </Box>

  )}