import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  useColorMode,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { BsToggleOn } from 'react-icons/bs';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Box bg='#fff' h='98px' w='100vw' p={4} color='black' borderRadius='10px'>
        <Flex
          minWidth='max-content'
          justifyContent='center'
          alignItems='center'
          gap='4'
        >
          <Box pr='40px'>
            <Text as='i' fontSize='4xl' fontWeight='700' fontFamily='Pattaya'>
              Image Gallery
            </Text>
          </Box>
          <Box>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='pointer'
                  children={<Search2Icon color='gray.300' />}
                />
                <Input
                  variant='filled'
                  type='text'
                  w='420px'
                  placeholder='search images here'
                  bg='#ececec'
                  color='#c4c4c4'
                  size='md'
                />
              </InputGroup>
            </Stack>
          </Box>
          <Box pl='10px'>
            <Text
              color='#333333'
              fontSize='md'
              fontWeight='700'
              fontFamily='Montserrat'
            >
              Explore
            </Text>
          </Box>
          <Box pl='10px'>
            <Text
              color='#333333'
              fontSize='md'
              fontWeight='700'
              fontFamily='Montserrat'
            >
              Collection
            </Text>
          </Box>
          <Box pl='10px'>
            <Text
              color='#333333'
              fontSize='md'
              fontWeight='700'
              fontFamily='Montserrat'
            >
              Community
            </Text>
          </Box>
          <Box pl='40px'>
            <Flex justifyContent='center' alignItems='center' gap='2'>
              <Text
                color='#333333'
                fontSize='md'
                fontWeight='700'
                fontFamily='Montserrat'
              >
                Dark Mode
              </Text>
              <BsToggleOn
                fontSize='30px'
                cursor='pointer'
                onClick={toggleColorMode}
              >
                {colorMode === 'light' ? 'Dark' : 'Light'}
              </BsToggleOn>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;
