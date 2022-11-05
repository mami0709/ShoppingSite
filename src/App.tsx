import React from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { setProducts, ProductState } from "./redux/slice/products";
import { useState } from "react";
import {  ProductsData } from "./ProductData"
import { Box, Text,  } from '@chakra-ui/react'


function App() {
  
  const taskList:any = useSelector<ProductState>((state:any) => state.products.value);

  return (
    <>
      <Box >
        <h1>Shopping Site!</h1>
        <Box>
          {taskList.map((product:any) => (
            <Box>   
              <Text>{product.title}</Text>
              <Text>{product.price}</Text>
              {/* <Text>{product.id}</Text> */}
              {/* TODO:商品画像の追加 */}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default App;
