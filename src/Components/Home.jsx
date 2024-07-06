import { Box, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assests/bitcoin-cryptocurrency5k-ne-3840x2160.jpg"
import img2 from "../Assests/1530321-Alexander-Elder-Quote-The-goal-of-a-successful-trader-is-to-make.jpg"
import img3 from "../Assests/1424845.webp"
import img4 from "../Assests/2021_11_cryptocurrencies-8k-wallpapers-942468445.jpg"
import img5 from "../Assests/0ae6fc42da080e5ad9cbc60d4a6d0082.jpg"
import img6 from "../Assests/Type_Circles_4x.png"

const Home = () => {
  return (
    <>
    <Box w={'100%'}
    h={['50vh','80vh']}
    bgColor={'pink'}
    >
      <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      interval={800}
      >
        <Box 
        h={['50vh','80vh']}
        >
        <Image 
        h={['50vh','80vh']}
        w={'100vw'}
          src={img1}
           fit={"fill"}
        >
        </Image>
        </Box>
        <Box 
        h={['50vh','80vh']}
        >
        <Image 
        h={['50vh','80vh']}
        w={'100vw'}
          src={img2}
           fit={'fill'} 
        >
        </Image>
        </Box>
        <Box 
        h={['50vh','80vh']}
        >
        <Image 
        w={'100vw'}
        h={['50vh','80vh']}
          src={img3}
           fit={'fill'} 
        >
        </Image>
        </Box>
        <Box 
        h={['50vh','80vh']}
        >
        <Image 
        h={['50vh','80vh']}
          src={img4}
           fit={'fill'} 
        >
        </Image>
        </Box>
        <Box 
        h={['50vh','80vh']}
        >
        <Image 
        h={['50vh','80vh']}
        w={'100vw'}
        
          src={img5}
           
          fit={"fill"} 
        >
        </Image>
        </Box>
        
      </Carousel>
    </Box>

    <Box
    minH={'60vh'}
    w={'100vw'}>
      <Stack direction={['column-reverse','row']}>
        <Box 
        w={'100vw'}
        
        pl={'5%'}
        pb={['20%','0']}
        fontSize={['1.5rem','1.8rem']}
        fontFamily={'Roboto'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        >
          Get the live information of crypto price changes every second with our
          Coin Pulse app.it Gives Information of more then 13K+ coins.You can also 
          know the ranking of various crypto coins and Graph which gives information 
          about their historic trends and use this trend in your trading.it also contains
          information of 100+ Crypto Exchanges at One place.  
        </Box>
        <Box w={'100vw'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        >
          <Image 
          src={img6}
          minH={'30%'}
          minW={'30%'}
          p={'10%'}
          >

          </Image>
        </Box>

      </Stack>
    </Box>
    </>
  )
}

export default Home