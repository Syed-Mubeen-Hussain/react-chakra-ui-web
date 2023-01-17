import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Box, Heading, Image, Container, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img5 from '../assets/5.png'
import img6 from '../assets/6.jpg'

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '3xl'
}

const Home = () => {
    const [isSmallerThan1131] = useMediaQuery('(max-width: 1131px)')
    return (
        <Box>
            <MyCarousel />
            <Container h={['auto', 'auto']} maxW={"container.xl"} p={["4", "16"]}>
                <Heading w={"fit-content"} m="auto" borderBottom={"2px"} py={"2"} textTransform={"uppercase"}>
                    Services
                </Heading>
                {
                    isSmallerThan1131 ?  <Stack p={"4"} alignItems="center" direction={['column']}>
                    <Image src={img5} w={[40, 400]} filter={'hue-rotate(-130deg)'} />
                    <Text letterSpacing={"widest"} lineHeight={"190%"} textAlign={"center"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore illum, unde et ducimus quidem nesciunt quaerat quae voluptate? Hic, placeat! Velit laudantium minima pariatur rem eos possimus nihil culpa voluptates totam dolores quod voluptatum officia suscipit deleniti aut consequatur sunt distinctio ad non vero, molestiae cum. Illo, praesentium quidem animi vero nisi perspiciatis atque temporibus error quasi tempora nihil corrupti eveniet possimus, porro architecto similique, sunt assumenda. Voluptate ullam repellendus iste ea, explicabo cupiditate distinctio quod illo dolorum nam perferendis fugit vitae ipsam exercitationem at odio eos fugiat. Nemo, perspiciatis? Nesciunt, voluptates eum placeat saepe ipsum obcaecati impedit commodi?
                    </Text>
                </Stack> :  <Stack p={"4"} alignItems="center" direction={['column', 'row']}>
                    <Image src={img5} w={[40, 400]} filter={'hue-rotate(-130deg)'} />
                    <Text letterSpacing={"widest"} p={'10'} lineHeight={"190%"} textAlign={"center"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore illum, unde et ducimus quidem nesciunt quaerat quae voluptate? Hic, placeat! Velit laudantium minima pariatur rem eos possimus nihil culpa voluptates totam dolores quod voluptatum officia suscipit deleniti aut consequatur sunt distinctio ad non vero, molestiae cum. Illo, praesentium quidem animi vero nisi perspiciatis atque temporibus error quasi tempora nihil corrupti eveniet possimus, porro architecto similique, sunt assumenda. Voluptate ullam repellendus iste ea, explicabo cupiditate distinctio quod illo dolorum nam perferendis fugit vitae ipsam exercitationem at odio eos fugiat. Nemo, perspiciatis? Nesciunt, voluptates eum placeat saepe ipsum obcaecati impedit commodi?
                    </Text>
                </Stack>
                }
            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
    >
        <Box w={"full"} h={'100vh'}>
            <Image src={img2} width={'100%'} height={'100%'} objectFit={'cover'} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Gaming is fun
            </Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <Image src={img3} width={'100%'} height={'100%'} objectFit={'cover'} />
            <Heading bgColor={"blackAlpha.900"} color={"white"} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <Image src={img6} width={'100%'} height={'100%'} objectFit={'cover'} />
            <Heading bgColor={"white"} color={"black"} {...headingOptions}>
                Gaming on Pc
            </Heading>
        </Box>
    </Carousel>
)

export default Home