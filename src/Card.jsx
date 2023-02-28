import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  Img,
  SimpleGrid,
  Icon,
  Spacer,
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
                src='./images/elephant.png'
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
        <Box border='1px solid #E5E5E5' borderRadius='6px' h='400px' w='320px'>
          <Img boxSize='320px' src='./images/elephant.png' alt='Dan Abramov' />
          <Flex>
            <Box>
              <Img
                borderRadius='full'
                boxSize='40px'
                src='./images/elephant.png'
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
        <Box border='1px solid #E5E5E5' borderRadius='6px' h='276px' w='428px'>
          <Img w='428px' h='216px' src='./images/ocean.png' alt='Dan Abramov' />
          <Flex pl='10px' pr='20px' alignItems='center'>
            <Box>
              <Img
                borderRadius='full'
                boxSize='40px'
                src='./images/ocean.png'
                alt='Dan Abramov'
              />
            </Box>
            <Flex
              w='140px'
              h='32px'
              ml='10px'
              direction='column'
              justifyContent='sapce-around'
              alignItems='flex-start'
            >
              <Box>
                <Text
                  color='#4F4F4F'
                  fontSize='md'
                  fontWeight='700'
                  fontFamily='Montserrat'
                >
                  Julia Robertson
                </Text>
              </Box>
              <Box>
                <Text
                  as='i'
                  color='#A7A7A7'
                  fontSize='10px'
                  fontWeight='600'
                  fontFamily='Poppins'
                >
                  @juliaclicks
                </Text>
              </Box>
            </Flex>
            <Spacer />
            <Flex alignItems='center' justifyContent='center'>
              <Box>
                <AiOutlineLike />
              </Box>
              <Box>
                <Text
                  color='#4F4F4F'
                  fontSize='10px'
                  fontWeight='700'
                  fontFamily='Montserrat'
                >
                  2.3k
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Card;
