import React from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { setProducts, ProductState } from "./redux/slice/products";
import { useState } from "react";
import {  ProductsData } from "./ProductData"
import { Box, Text, Image, Center, SimpleGrid, GridItem,LinkBox, LinkOverlay, Heading ,Grid,   } from '@chakra-ui/react'
import { Tab } from "./layout/Tab"


function App() {
  
  const taskList:any = useSelector<ProductState>((state:any) => state.products.value);

  return (
    <>
      <Tab />
      
        <Center paddingTop={"100px"}  width="100%">
          {taskList.map((product:any) => (
            <Box >
            <Grid templateColumns='repeat(1, 1fr )' gap={4} >
              <GridItem w='100%' h='10'>
              <LinkBox >  
                <Image src={product.image} boxSize='300px' objectFit='cover' />
                <LinkOverlay href='#'>
                  <Heading size='md' my='2'>{product.title}</Heading>
                  <Text>{product.price}</Text>
                </LinkOverlay>
              </LinkBox>
              </GridItem>
            </Grid> 
          </Box>
          ))}
        </Center>
      
    </>
  );
}

export default App;
