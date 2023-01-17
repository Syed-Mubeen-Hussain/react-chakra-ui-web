import { Button, Text, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
          <Heading w={'full'} size={'lg'} textAlign={'left'}>Welcome Back</Heading>
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
          <Button alignSelf={'flex-end'} variant={'link'}>Forget Password?</Button>
          <Button colorScheme={'purple'} w={'full'} type={'submit'}>Login</Button>
          <Text alignSelf={'flex-end'}>
            New User?{' '}
            <Button variant={'link'}><Link to={'/signup'}>Sign Up</Link></Button>
          </Text>
        </VStack>
      </form>
    </Container>
  )
}

export default Login