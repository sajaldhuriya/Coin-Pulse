import { Box, Button, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} justifyContent={'space-between'}>
      <HStack>
      <Image
      src="https://theconquercoin.com/images/conquer.png"
      h={['30px','50px']}
      w={['30px','50px']}
      fit={'cover'}
      borderRadius={'50%'}
      ></Image>
      <Box color={'white'}
      fontSize={['1.4rem','2rem']}
      fontFamily={"Bebas Neue"}
      letterSpacing={'2px'}
      alignSelf={'center'}
      pt={'5px'}
      >Coin Pulse</Box>
      </HStack>
      
      <HStack spacing={['4','8']} pr={['2','10']} >
        <Button variant={"unstyled"} color={"white"} fontSize={['1rem','1.3rem']}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}fontSize={['1rem','1.3rem']}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}fontSize={['1rem','1.3rem']}>
        <Link to="/coins">Coins</Link>
      </Button>
      </HStack>
    </HStack>
    
  );
};

export default Header