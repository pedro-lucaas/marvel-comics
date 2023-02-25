import { Box } from '@chakra-ui/react';
import React from 'react';
import backgroundImage from '../../assets/background.jpg';

const DefaultLayout: React.FC<{ children: any }> = ({ children }) => {
  return <Box
    w={"100%"}
    h={"100%"}
    position={"relative"}
  >
    <Box
      backgroundImage={backgroundImage}
      filter={"blur(5px)"}
      position={"fixed"}
      top={"0"}
      left={"0"}
      w={"100%"}
      h={"100%"}
      zIndex={"-1"}
    />
    <Box
      bg={"blackAlpha.400"}
      position={"fixed"}
      top={"0"}
      left={"0"}
      w={"100%"}
      h={"100%"}
      zIndex={"-1"}
    />
    {children}
  </Box>;
}

export default DefaultLayout;