import { Box, Button, Heading, Text, Image } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import React from  'react';


export const SectionOneMobile: React.FC = () => {
  const property = {
    title: "Logitech's High Performance Wirelees Gamming Mouse ",
  };
  return (
    
      <Box className="block  md:hidden  max-w-full flex-row  my-4 ml-4 mr-4 px-12 justify-center items-center"  >
      <Box className="flex  md:hidden mb-28 justify-center mt-12 justify-items-center " >

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{  ease: "easeIn", delay: 1.5, duration: 1.9 }}>
        <Box className="relative top-24 max-w-full max-h-full h-auto items-center" >
          <Text className="text-center tracking-wider "  color="blue.300" fontWeight="bold" fontSize="150px"    >G502</Text>
          </Box>
            <Box className="flex-shrink-1  justify-center justify-items-center max-w-full px-3 " >     
          <Image   position="relative"   zIndex={9999}  src="/g502-mobile.png" alt='rock' />
          </Box>
        </motion.div>
      </Box>
       
      <Box className="md:block h-full  w-full max-w-full" >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 0.7, duration: 1.9 }} >

       < Heading className="tracking-wider " fontSize="4xl">G502 HERO WIRELLES</Heading>
       </motion.div >

       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1.9 }} >
       <Text className="tracking-widest " marginTop={4} fontSize="2xl">{property.title}</Text>
       <Text marginTop={8} fontSize="2xl">The Razer Ouraboras is outfitted whit the most advanced & configurable sensor, the all-new 8200dpi 4G sensor.It tracks so precisely, you always hit target exactly where you need to. </Text>
       <Text className="tracking-widest " color="blue.300"   marginTop={4} fontSize="2xl">USD 99.99</Text>
       </motion.div> 

       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 1 }} >
       <Box marginTop={6}>
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