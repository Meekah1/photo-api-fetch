import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  Img,
  Grid,
  GridItem,
  // SimpleGrid,
  Icon,
  Spacer,
} from '@chakra-ui/react';
import { AiOutlineLike } from 'react-icons/ai';

function Card() {
  return (
    <Box w='100vw' h='1000px' bg='#fff' m='0'>
      <Grid
        w='100vw'
        pt='20px'
        // margin='auto'
        // m='0'
        templateColumns='repeat(6, 1fr)'
        // templateRows='repeat(4, minmax(220px, auto))'
        gap={4}
      >
        <GridItem
          border='1px solid #E5E5E5'
          borderRadius='6px'
          colStart={1}
          colEnd={3}
          rowStart={1}
          rowEnd={2}
          h='280px'
          w='320px'
        >
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
        </GridItem>
        <GridItem
          colStart={3}
          colEnd={5}
          rowStart={1}
          rowEnd={3}
          m='0'
          p='0'
          border='1px solid #E5E5E5'
          borderRadius='6px'
          h='400px'
          w='320px'
        >
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
        </GridItem>
        <GridItem
          colStart={5}
          colEnd={7}
          rowStart={1}
          rowEnd={2}
          border='1px solid #E5E5E5'
          borderRadius='6px'
          h='276px'
          w='428px'
        >
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
        </GridItem>
        <GridItem
          colStart={1}
          colEnd={3}
          rowStart={2}
          rowEnd={3}
          border='1px solid #E5E5E5'
          borderRadius='6px'
          h='400px'
          w='320px'
        >
          <Img
            w='320px'
            h='334px'
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
        </GridItem>
        <GridItem
          colStart={3}
          colEnd={5}
          rowStart={2}
          rowEnd={4}
          m='0'
          p='0'
          border='1px solid #E5E5E5'
          borderRadius='6px'
          h='280px'
          w='320px'
        >
          <Img
            w='320px'
            h='220px'
            src='./images/elephant.png'
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
        </GridItem>
        <GridItem
          colStart={5}
          colEnd={7}
          rowStart={2}
          rowEnd={3}
          border='1px solid #E5E5E5'
          borderRadius='6px'
          h='400px'
          w='430px'
        >
          <Img w='428px' h='348px' src='./images/ocean.png' alt='Dan Abramov' />
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
        </GridItem>
        <GridItem
          colStart={1}
          colEnd={3}
          rowStart={3}
          rowEnd={5}
          border='1px solid #E5E5E5'
          borderRadius='6px'
          h='364px'
          w='274px'
        >
          <Img w='274px' h='296px' src='./images/ocean.png' alt='Dan Abramov' />
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
        </GridItem>
        <GridItem
          colStart={3}
          colEnd={5}
          rowStart={3}
          rowEnd={5}
          border='1px solid #E5E5E5'
          borderRadius='6px'
          h='364px'
          w='274px'
        >
          <Img w='274px' h='296px' src='./images/ocean.png' alt='Dan Abramov' />
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
        </GridItem>
        <GridItem
          colStart={5}
          colEnd={7}
          rowStart={3}
          rowEnd={5}
          border='1px solid #E5E5E5'
          borderRadius='6px'
          h='364px'
          w='532px'
        >
          <Img w='532px' h='296px' src='./images/ocean.png' alt='Dan Abramov' />
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
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Card;
