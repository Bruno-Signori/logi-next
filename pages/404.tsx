import { Box, Flex, Image, List, SimpleGrid, Text, Icon, Divider, Button, Skeleton, Spinner } from "@chakra-ui/core";

const TextBoxOne = ["flex text-5xl font-bold justify-center tracking-tight text-blue-light"];
const TetxBoxTwo = ["relative z-40 text-1xl justify-center tracking-wide -top-2" ]
export default function NotFound() {
  return (
    <div>
      <Box className="h-96" justifyContent="center" textAlign="center" marginTop="56px" marginBottom="100px" >
          <SimpleGrid  justifyContent="center" textAlign="center" >
            <Box h="100%" >
            <h1>Page Not Found 
         </h1>
         <p>Are you Lost? </p>
         <br/>
            <a style={{cursor: 'pointer', color: 'blue'}} href="/"> <br/>Voltar a Home page!</a>
            </Box>
            </SimpleGrid>
        </Box>
        

    </div>
  )
}