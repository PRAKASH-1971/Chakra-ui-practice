import React from 'react'
import {Box, SimpleGrid} from "@chakra-ui/react"

const Layout = () => {
    const items = new Array(10).fill(0).map((a,i)=>i+1);
  return (
    <div>
        <Box w="4xl" m="20px auto">
        <SimpleGrid columns={[1,2,4]} spacing={10}>
         {items.map((item,index)=>{
            return(
                <Box key={index} border="1px solid black">{item}</Box>
            );
         })};
        </SimpleGrid>
        </Box>
    </div>
  )
}

export default Layout