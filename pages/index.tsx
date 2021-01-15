
import {Box, Button, Flex, Grid, Heading, Input, Link, Text, Icon, Image, SimpleGrid} from '@chakra-ui/core';
import { motion } from 'framer-motion';

import BoxMediaContacts from '../components/BoxMedia';
import BoxServicesContainer from '../components/BoxServicesContainer';
import SEO from '../components/SEO';
import BoxMouse from '../components/BoxMouse';
import { BoxMenbers } from '../components/BoxMenbers';
import { Slider } from '../components/BoxMenbersMob';



export default function Home() {

  const property = {
    title: "Logitech's High Performance Wirelees Gamming Mouse ",
  };
  const TextBoxOne = ["flex text-5xl font-bold justify-center tracking-tight text-blue-light"];
  const TetxBoxTwo = ["relative text-1xl justify-center tracking-wide -top-2" ]

  return (
    <Grid as="main" height="100%" w="100%" justifyContent="center" alignItems="center" >
    <SEO title="TechGear, logitech landing page" shouldExcludeTitleSuffix />

      <div className="flex-1 justify-center h-full max-w-screen-2xl justify-items-center content-center " >
      
      <Box className="hidden  md:flex    max-w-screen-2xl flex-row  my-20 ml-4  justify-center items-center"  >
       
       <Box className="md:block h-full w-full" >
       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ delay: 0.7, duration: 1.9 }} >

        < Heading size="2xl" lineHeight="shorter" marginTop={16}>G502 HERO WIRELLES</Heading>
        </motion.div >

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1.9 }} >
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

      <Box className="hidden  md:flex " height="100%" width="70%" justifyContent="center" marginTop="100px" marginRight="20px">
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{  ease: "easeIn", delay: 1.5, duration: 1.9 }}
            >
      <Box className="relative flex-shrink-0 left-0 top-8  " >     
      <Image  position="relative"   zIndex={9999}  src="/logitech.png" alt='rock' />
      </Box>
      <Text className="relative flex-shrink-1 left-32 -top-64   " transform="rotate(90deg)" color="blue.300" fontWeight="bold"  fontSize="145px"    >G502</Text>
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
      <text className={`${TetxBoxTwo}`}>We Proudly introduce our powerful members</text>

      <Link href="/services">
      <Button rightIcon="arrow-forward" variant="link" color="blue.300"   >View more</Button>
      </Link>

      </SimpleGrid>
     
      </Box>
      <div className="md:hidden sm:block ">
      <Slider/>
      </div>
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
    

   

    </div>
    </Grid>
    
     
    

  )
 
}
