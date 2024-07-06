import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import { Link } from "react-router-dom";

const Coins = () => {

  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [page, setpage] = useState(1);
  const [currency, setcurrency] = useState('inr');
  const currencySymbol = currency ==='inr'?'₹':currency==='eur'?'€':'$'
  const changepage = (page)=>{
    setpage(page)
    setloading(true)
  }
  const btns =new Array(132).fill(1)

  useEffect(() => {
    

    const fetchCoins = async()=>{

      try {
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setcoins(data);
        setloading(false);
      } catch (error) {
        seterror(true)
        setloading(false)
      }


    }
    fetchCoins()



  }, [currency,page])

  if(error) return <Error message={'Error in fetching coins'}/>
  


  return (
    <Container maxW={'100%'} pt={['20px','30px']} 
    bgColor={'#F0F8FF'}
    >
      {loading?<Loader/> :(
        <>
        <RadioGroup value={currency} onChange={setcurrency} p={'8'}>
          <HStack spacing={'4'}>
            <Radio value={'inr'}>INR</Radio>
            <Radio value={'usd'}>USD</Radio>
            <Radio value={'eur'}>EUR</Radio>
          </HStack>
        </RadioGroup>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                key={i.id}
                id={i.id}
                name={i.name}
                img={i.image}
                price={i.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={'full'}overflowX={'auto'}p={'8'}>
            {
              btns.map((item,index)=>(
                <Button key={index}bgColor={'blackAlpha.900'} color={'white'} onClick={()=>changepage(index+1)}>
                  {index+1}
                </Button>
              ))
            }
          </HStack>
        </>
      )}
      
    </Container>
  );
};

const CoinCard = ({ id,name, img, symbol,price,currencySymbol = "₹" }) => (
  <Link to={`/coin/${id}`}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      bgColor={'white'}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {symbol}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
    </VStack>
  </Link>
);



export default Coins