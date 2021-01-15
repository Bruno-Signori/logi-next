import { Box, Flex } from '@chakra-ui/core';
import React, {useState} from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ImgComp } from './imgComps';

export function Slider(){
  // let for components2
  let sliderArr = [<ImgComp src={"/terabyte.png"}/>,<ImgComp src={"/electros.png"}/>,<ImgComp src={"/spaceplay.png"}/>,<ImgComp src={"/predator.png"}/>];
  

 
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    console.log(x)
  }
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    console.log(x)


  };


  return(
    <div className="flex max-w-full h-auto justify-center">
    <div className="flex relative border-none  w-80  h-72  p-0 m-5 justify-items-center overflow-hidden md:hidden ">
     {sliderArr.map((item,index)=>{
       return(
         <div key={index} style={{transform: `translateX(${x}%)`}} className="relative slide  min-w-full h-5/6 overflow-hidden " >
           {item}
      
            </div>
       )
     })
  }
      <Box id="goLeft" as={FiChevronLeft}  color='blue.300' size="30px" onClick={goLeft} className="absolute cursor-pointer left-0 top-16 bg-opacity-5 bg-gray -translate-y-1/2 w-15 h-15 z-50"  ></Box>
      <Box id="goRight" as={FiChevronRight}  color='blue.300' size="30px" onClick={goRight} className="absolute cursor-pointer right-0  top-16 bg-opacity-5 bg-gray -translate-y-1/2 w-15 h-15 z-50" >Rigth</Box>
 

    </div>
    </div>  

  )
}