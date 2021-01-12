
import {Box, Button, Flex, Grid, Heading, Input, Link, Text, Icon, Image, SimpleGrid} from '@chakra-ui/core';
import { motion } from 'framer-motion';

import BoxMediaContacts from '../components/BoxMedia';
import BoxServicesContainer from '../components/BoxServicesContainer';
import SEO from '../components/SEO';
import BoxMouse from '../components/BoxMouse';
import { BoxMenbers } from '../components/BoxMenbers';



export default function Home() {

  const property = {
    title: "Logitech's High Performance Wirelees Gamming Mouse ",
  };
  const TextBoxOne = ["flex text-5xl font-bold justify-center tracking-tight text-blue-light"];
  const TetxBoxTwo = ["relative text-1xl justify-center tracking-wide -top-2" ]

  return (
    <Grid as="main" height="100%" w="100%" justifyContent="center" alignItems="center" >
      <SEO title="TechGear, logitech landing page" shouldExcludeTitleSuffix />
        <Box d="flex" marginTop="100px" as="section" maxWidth="1250px" flexDirection="row" justifySelf="center" justifyContent="center" alignItems="center" >

       <Box height="100%"  width="100% " margin={6} flexDir="column" alignItems="center">
       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.7, duration: 1.9 }} >

            < Heading size="2xl" lineHeight="shorter" marginTop={16}>G502 HERO WIRELLES</Heading>
        </motion.div >

        <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.8, duration: 1.9 }} >
        <Text marginTop={4} fontSize="4xl">{property.title}</Text>
        <Text marginTop={8} fontSize="2xl">The Razer Ouraboras is outfitted whit the most advanced & configurable sensor, the all-new 8200dpi 4G sensor.It tracks so precisely, you always hit target exactly where you need to. </Text>
        <Text color="blue.300"   marginTop={4} fontSize="3xl">USD 99.99</Text>
        </motion.div> 

        <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.9, duration: 1 }} >
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

      <Box height="35%" width="35%" marginTop="150px">
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.9 }}
            >
            
      <Image  position="relative"  zIndex={9999}  src="/logitech.png" alt='rock' />
      <Text transform="rotate(270deg)" color="blue.300" fontWeight="bold" position="relative"  fontSize="145px" float="right" bottom="267px" right="-135px" >G502</Text>
      </motion.div>
    </Box>
    </Box>

    <Box justifyContent="center" textAlign="center" marginTop="100px" marginBottom="100px" >
      <SimpleGrid  justifyContent="center" textAlign="center" >
      <Box h="100%" >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1.9 }}
        
      >
      <text className={`${TextBoxOne}`} >PRODUCTS</text>
      </motion.div>
      </Box>
      <text className={`${TetxBoxTwo}`}>Which type of gear are you looking for</text>

      <Link href="/products/allproducts">
      <Button rightIcon="arrow-forward" variant="link" color="blue.300"   >View more</Button>
      </Link>

      </SimpleGrid>
      </Box>

     <BoxMouse />

     <Box justifyContent="center" textAlign="center" marginTop="200px" marginBottom="100px" >
      <SimpleGrid  justifyContent="center" textAlign="center" >
      <Box h="100%" >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1.9 }}
        
      >
      <text className={`${TextBoxOne}`} >SERVICES</text>
      </motion.div>
      </Box>
      <text className={`${TetxBoxTwo}`}>We provide ore than high-tech products!</text>

      <Link href="/services">
      <Button rightIcon="arrow-forward" variant="link" color="blue.300"   >View more</Button>
      </Link>

      </SimpleGrid>
      </Box>
     
     <BoxServicesContainer />

      
     <Box justifyContent="center" textAlign="center" marginTop="200px" marginBottom="100px" >
      <SimpleGrid  justifyContent="center" textAlign="center" >
      <Box h="100%" >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1.9 }}
        
      >
      <text className={`${TextBoxOne}`}  >MEMBERS</text>
      </motion.div>
      </Box>
      <text className={`${TetxBoxTwo}`}>We Proudly introduce ou members</text>

      <Link href="/services">
      <Button rightIcon="arrow-forward" variant="link" color="blue.300"   >View more</Button>
      </Link>

      </SimpleGrid>
      </Box>
      <BoxMenbers/>



      <Box justifyContent="center" textAlign="center" marginTop="200px" marginBottom="100px" >
      <SimpleGrid  justifyContent="center" textAlign="center" >
      <Box h="100%" >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1.9 }}
        
      >
      <text className={`${TextBoxOne}`} >CONTACTS</text>
      </motion.div>
      </Box>
      <text className={`${TetxBoxTwo}`}>Some ways for you to contact us</text>

      <Link href="/services">
      <Button rightIcon="arrow-forward" variant="link" color="blue.300"   >View more</Button>
      </Link>

      </SimpleGrid>
      </Box>

    <BoxMediaContacts />
    

   

    </Grid>
    
     
    

  )
 
}
