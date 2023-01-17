import { Button, Text, Container, Heading, Input, VStack, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container w={"container.xl"} height={'100vh'}>
      <form>
        <VStack
          alignItems={'center'}
          w={['full', '96']}
          spacing={'6'}
          m="auto"
          my={'16'}
        >
          <Heading w={'full'} size={'lg'} textAlign={'center'}>Gaming Hub</Heading>
          <Avatar boxSize={'32'} />
          <Input
            type={'text'}
            w={'full'}
            placeholder='Name'
            required
            focusBorderColor='none'
          />
          <Input
            type={'email'}
            w={'full'}
            placeholder='Email'
            required
            focusBorderColor='none'
          />
          <Input
            type={'password'}
            w={'full'}
            placeholder='Password'
            required
            focusBorderColor='none'
          />
          <Button colorScheme={'purple'} w={'full'} type={'submit'}>SignUp</Button>
          <Text alignSelf={'flex-end'}>
           Already Signed Up?{' '}
            <Button variant={'link'}><Link to={'/login'}>Sign Up</Link></Button>
          </Text>
        </VStack>
      </form>
    </Container>
  )
}

export default SignUp