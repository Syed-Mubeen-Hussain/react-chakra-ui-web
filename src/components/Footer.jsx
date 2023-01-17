import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} p={'16'} minH={'40'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack p={4} alignItems={'center'} w='full'>
          <Heading size={'md'} textAlign='center' textTransform='uppercase'>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid'}>
            <Input placeholder='Enter Email Here...' border={'none'} borderRadius='none' outline={'none'} focusBorderColor='none' />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0px 20px 20px 0px'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          width={'full'}
          p={4}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign='center'>
          Chakra Ui Web
          </Heading>
          <Text>
            All right reserved
          </Text>
        </VStack>
        <VStack
          width={'full'}
          p={4}
        >
          <Heading size={'md'}>
            Social Media
          </Heading>
          <Button variant={'link'} color='white'>
            <a href="https://www.facebook.com/syed.mubeen123">Facebook</a>
          </Button>
          <Button variant={'link'} color='white'>
            <a href="https://www.linkedin.com/in/syed-mubeen-hussain-57a99a247/">Linkedin</a>
          </Button>
          <Button variant={'link'} color='white'>
            <a href="https://github.com/Syed-Mubeen-Hussain">Github</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer