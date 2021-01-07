
import {Box, Button, Flex, Grid, Heading, Input, Link, Text, Icon, Image, SimpleGrid} from '@chakra-ui/core'
import { motion, useCycle } from 'framer-motion'

import BoxMediaContacts from '../components/BoxMedia';
import BoxServicesContainer from '../components/BoxServicesContainer';
import SEO from '../components/SEO';
import BoxMouse from '../components/BoxMouse';



export default function Home() {

  const property = {
    title: "Logitech's High Performance Wirelees Gamming Mouse ",
  };
  

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
            drag={true}
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
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1.5, duration: 1.9 }}
        
      >
      <Text flex="1" fontSize="6xl" fontWeight="bold" justifyContent="center" color="blue.300"  >PRODUCTS</Text>
      </motion.div>
      </Box>
      <Text size="1xl"  position="relative" justifyContent="center"   top="-34px">Which type of gear are you looking for</Text>

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
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1.5, duration: 1.9 }}
        
      >
      <Text flex="1" fontSize="6xl" fontWeight="bold" justifyContent="center" color="blue.300"  >SERVICES</Text>
      </motion.div>
      </Box>
      <Text size="1xl"  position="relative" justifyContent="center"   top="-34px">We provide ore than high-tech products!</Text>

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
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1.5, duration: 1.9 }}
        
      >
      <Text flex="1" fontSize="6xl" fontWeight="bold" justifyContent="center" color="blue.300"  >CONTACTS</Text>
      </motion.div>
      </Box>
      <Text size="1xl"  position="relative" justifyContent="center"   top="-34px">Some ways for you to contact us</Text>

      <Link href="/services">
      <Button rightIcon="arrow-forward" variant="link" color="blue.300"   >View more</Button>
      </Link>

      </SimpleGrid>
      </Box>

    <BoxMediaContacts />
    

   

    </Grid>
    
     
    

  )
 
}
