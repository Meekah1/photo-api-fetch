import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

function Hero() {
  return (
    <Box w='100vw'>
      <Flex
        w={'100%'}
        h={'400px'}
        backgroundImage={'url(./images/bgImg.jpeg)'}
        backgroundSize={'cover'}
        backgroundPosition={'10% 80%'}
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Stack
          spacing={4}
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <Box>
            <Text
              color='#ffffff'
              fontSize='32px'
              fontWeight='700'
              fontFamily='Montserrat'
              lineHeight='38px'
            >
              Download High Quality Images by creators
            </Text>
          </Box>
          <Box>
            <Text
              color='#C4C4C4'
              fontSize='14px'
              fontWeight='500'
              fontFamily='Montserrat'
              lineHeight='17px'
            >
              Over 2.4 million+ stock Images by our talented community
            </Text>
          </Box>
          <Box>
            <Flex gap='4' justifyContent='center' alignItems='center'>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<Search2Icon color='gray.300' />}
                />
                <Input
                  variant='filled'
                  type='text'
                  w='808px'
                  h='56px'
                  placeholder='search images here'
                  bg='#FFFFFF'
                  borderRadius='10px'
                  color='#c4c4c4'
                  size='md'
                />
              </InputGroup>
            </Flex>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Hero;
