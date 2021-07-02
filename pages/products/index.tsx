import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import {useRouter} from 'next/router';
import Link from 'next/link';
import SEO from "../../components/SEO";
import { client } from "../../lib/prismic";
import Prismic from 'prismic-javascript';
import {Document} from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';
import { Box, Flex, Image, List, SimpleGrid, Text, Icon, Divider, Button, Skeleton, Spinner } from "@chakra-ui/core";
import { motion } from "framer-motion";
import {FiStar} from 'react-icons/fi';
import { MenbersMobile } from "../../components/BoxMenbersMobile";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import NewComponet from "../../components/NewComponet";
import { Carousel } from "react-responsive-carousel";


interface IProduct {
  slug: string;
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: Document[];
}
const TextBoxOne = ["flex text-5xl font-bold justify-center tracking-tight text-blue-light"];
const TetxBoxTwo = ["relative z-40 text-1xl justify-center tracking-wide -top-2" ]

export default function Home({recommendedProducts}: HomeProps) {
  const router = useRouter()
  
  if (router.isFallback) {
    return (
      <div className="flex mt-7 justify-items-center justify-center w-full h-full" >
        
        <Spinner 
            thickness="5px"
            speed="0.45s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />

      </div>
      
    )
  }
  return (
    <div>
      <SEO title="Products logitech" shouldExcludeTitleSuffix />
        <Box justifyContent="center" textAlign="center" marginTop="56px" marginBottom="100px" >
          <SimpleGrid  justifyContent="center" textAlign="center" >
            <Box h="100%" >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 0.2, duration: 1.4 }}>
                  <text className={`${TextBoxOne}`} >PRODUCTS</text>
                  </motion.div>
                  </Box>
                  <text className={`${TetxBoxTwo}`}>Which type of gear are you looking for</text>

            </SimpleGrid>
        </Box>

       
      <Flex flexDir="row" flexWrap="wrap" justifyContent="center" alignItems="baseline">      
        <Flex className="max-w-screen-xl" flexWrap="wrap" justifyContent="center" alignContent="space-between"  >
             {recommendedProducts.map(recommendedProducts =>{
               return (
                <motion.div 
                whileHover={{ scale: 1.04  }}
                transition={{ delay: 0.1, duration: 0.19 }}
                >
                <Flex maxW="sm" flexDir="row"  bg="gray.700"  align="center" justifySelf="center" h="500px"  marginX="15px" marginBottom="24px" rounded="lg" overflow="hidden">
                  
                  <Flex  justifyItems="center">
                   
                    <Box  key={recommendedProducts.id}>
                      <Flex justifyItems="top" align="top" justify="center"  alignSelf="center"  >
                        <Carousel showStatus={false} showThumbs={false} className="bg-auto md:bg-contain h-56 align-top
                    w-56" >
                     <div >
                    <Image  src={recommendedProducts.data.thumbnail.url}  alt='mouse g502'/>
                    </div>
                    <div>
                     <Image  src={recommendedProducts.data.thumbnail.url}  alt='mouse g502'/>
                    </div>
                    </Carousel>
                    </Flex>
                   <Flex align="center" color="blue.300" justify="center" marginTop="6px">
                  
                     <text className="tracking-wider">
                       {PrismicDOM.RichText.asText(recommendedProducts.data.title)}
                       </text>
                   </Flex>


                   <Text className="mx-2 my-2 text-md text-center	" >{PrismicDOM.RichText.asText(recommendedProducts.data.description)}</Text>
                   
                   <Flex  align="center" marginTop="8px" justify="center" >
                   <Box mt="1" justifyItems="center"  alignSelf="center">
                    <Text className="text-sm text-center text-blue-light">Game</Text>
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <Icon size="16px" as={FiStar}
                          key={i}
                          color={i < (recommendedProducts.data.game) ? "blue.300" : "gray.600"}
                        />
                      ))}
                    </Box>
                    <Divider  backgroundColor="gray.300" paddingTop="40px" orientation="vertical" />
                    <Box mt="1" textAlign="center" alignItems="center">
                    <Text className="text-sm text-center text-blue-light">Work</Text>

                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <Icon size="16px" as={FiStar}
                          key={i}
                          color={i < (recommendedProducts.data.work) ? "blue.300" : "gray.600"}
                        />
                      ))}
                    </Box>
                    <Divider backgroundColor="gray.900" paddingTop="40px" orientation="vertical" />
                    
                    
                    <Box mt="1" alignItems="center">
                    <Text className="text-sm text-center text-blue-light whi">Graphic </Text>
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <Icon size="16px" as={FiStar}
                          key={i}
                          color={i < (recommendedProducts.data.design) ? "blue.300" : "gray.600"}
                        />
                      ))}
                  </Box>
                  </Flex>
                   <Flex className="justify-between mt-10 mx-3 justify-self-center">
                   <Text  >Price: $  {recommendedProducts.data.price}</Text>
                   <Button float="right" leftIcon="check" variant="solid"   backgroundColor="blue.300"  border="1px solid #19B5FE">
                    Add To Cart
                      </Button>
                   </Flex>
                  
                   
                   

                   </Box>
                   </Flex>

                   </Flex>
                   </motion.div>

                
               )
             })}

            
           </Flex>
           </Flex>
           <Divider/>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'products')
  ]);

     return {
      
      props:{

        recommendedProducts: recommendedProducts.results,
      

      },
        revalidate: 1,
            
      }
     }

    
