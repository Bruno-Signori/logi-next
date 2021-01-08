import React from  'react';
import Image from  'next/image';
import {motion} from "framer-motion";
import {MenuMobile} from '../MenuMobile'


// First, create an alias for breakpoints

const MyHeader: React.FC = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.1 }}
    >
    <div className="sm:px-7 max-w-screen-3xl	space py-3  md:flex px-8 justify-between items-center"  >
     <div className="sm:py-2 " >
     <Image width={190} height={40} src="/rocketseat.svg" alt='rock' />
     </div>
  
     
    
    <div className="hidden md:block items-center justify-items-end ">
    <div className=" text-1xl space-x-6 tracking-wider"> 
            <a href="/" className="text-white px-3 py-2 focus:border-b-2 border-blue-light  hover:text-blue-light   ">Home</a>
            <a href="/products/allproducts" className="text-gray-300 px-3 py-2  focus:border-b-2 border-blue-light  hover:text-blue-light font-500  rounded-md ">Products</a>
            <a href="/services" className="text-gray-300 px-3 py-2  focus:border-b-2 border-blue-light  hover:text-blue-light  rounded-md  ">Services</a>
            <a href="/" className="text-gray-300 px-3 py-2  focus:border-b-2 border-blue-light  hover:text-blue-light  rounded-md  ">Members</a>
            <a href="/" className="text-gray-300 px-3 py-2  focus:border-b-2 border-blue-light  hover:text-blue-light  rounded-md  ">Contact</a>
            <button className="border-solid border-2 border-blue-light px-3 py-2 rounded-md focus:bg-gray-light hover:bg-gray-lightest"  >Sign in </button>

          </div>

    
      
      </div>
      <MenuMobile/>
      </div>
  </motion.div>
    
   
  );
}
export default MyHeader;

/**      <Link 
                  href="/" 
                  textDecor="none"
                  paddingBottom={4}
                  border="none" 
                  fontWeight="bold"
                  borderBottom="3px solid"
                  _focus={{border: "none" , color:"gray.900"}}
                  _hover={{color: 'blue.400'}}
                  color="blue.300" marginRight={10}>Home</Link>
                
                <Link href="/products/allproducts" 
                    textDecor="none"
                    border="none" 
                    fontWeight="medium"
                    _hover={{color: 'blue.400'}}
                    borderColor="gray.800"
                    paddingBottom={10}
                    _focus={{border: "none" , color:"gray.900"}}
                    marginRight={10}>Products</Link>

                <Link href="/services/repositories" 
                textDecor="none"
                border="none" 
                fontWeight="medium"
                _hover={{color: 'blue.400'}}
                _focus={{border: "none" , color:"gray.900"}}
                marginRight={10}>Services</Link>
                
                <Link href="/" 
                textDecor="none"
                border="none" 
                fontWeight="medium"
                _hover={{color: 'blue.400'}}
                _focus={{border: "none" , color:"gray.900"}}
                marginRight={10}>Members</Link>
                
                <Link href="/" 
                textDecor="none"
                border="none" 
                fontWeight="medium"
                _hover={{color: 'blue.400'}}
                _focus={{border: "none" , color:"gray.900"}}
                  marginRight={10}>Contact</Link>
 */