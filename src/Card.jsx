import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  Img,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { AiOutlineLike } from 'react-icons/ai';

function Card() {
  return (
    <Box w='100vw' h='1600px' bg='#fff'>
      <SimpleGrid pt='20px' pl='150px' pr='150px' columns={3} spacing={2}>
        <Box border='1px solid #E5E5E5' borderRadius='6px' h='280px' w='320px'>
          <Img
            w='320px'
            h='220px'
            src='./images/rockMountain.png'
            alt='Dan Abramov'
          />
          <Flex>
            <Box>
              <Img
                borderRadius='full'
                boxSize='40px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Box>
            <VStack>
              <Text
                color='#4F4F4F'
                fontSize='md'
                fontWeight='700'
                fontFamily='Montserrat'
              >
                Julia Robertson
              </Text>
              <Text
                as='i'
                color='#A7A7A7'
                fontSize='10px'
                fontWeight='600'
                fontFamily='Poppins'
              >
                @juliaclicks
              </Text>
            </VStack>
            <Flex justifyContent='center' alignItems='center' gap='2'>
              <AiOutlineLike />
              <Text> 2.3k</Text>
            </Flex>
          </Flex>
        </Box>
        <Box border='2px solid gray' borderRadius='6px' h='400px' w='320px'>
          <Img
            boxSize='320px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
          />
          <Flex>
            <Box>
              <Img
                borderRadius='full'
                boxSize='40px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Box>
            <VStack>
              <Text
                color='#4F4F4F'
                fontSize='md'
                fontWeight='700'
                fontFamily='Montserrat'
              >
                Julia Robertson
              </Text>
              <Text
                as='i'
                color='#A7A7A7'
                fontSize='10px'
                fontWeight='600'
                fontFamily='Poppins'
              >
                @juliaclicks
              </Text>
            </VStack>
            <Flex justifyContent='center' alignItems='center' gap='2'>
              <AiOutlineLike />
              <Text> 2.3k</Text>
            </Flex>
          </Flex>
        </Box>
        <Box border='2px solid gray' borderRadius='6px' h='276px' w='428px'>
          <Img
            w='428px'
            h='216px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
          />
          <Flex>
            <Box>
              <Img
                borderRadius='full'
                boxSize='40px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Box>
            <VStack>
              <Text
                color='#4F4F4F'
                fontSize='md'
                fontWeight='700'
                fontFamily='Montserrat'
              >
                Julia Robertson
              </Text>
              <Text
                as='i'
                color='#A7A7A7'
                fontSize='10px'
                fontWeight='600'
                fontFamily='Poppins'
              >
                @juliaclicks
              </Text>
            </VStack>
            <Flex justifyContent='center' alignItems='center' gap='2'>
              <AiOutlineLike />
              <Text> 2.3k</Text>
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Card;
