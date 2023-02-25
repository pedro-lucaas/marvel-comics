import styled from "styled-components";
import { ModalContent as ChakraModalContent } from "@chakra-ui/react";

export const ModalContent = styled(ChakraModalContent)`
  background: var(--chakra-colors-blackAlpha-800);
  border-radius: 2px;
  width: 100%;
  min-height: 100%;
  max-width: 100%;
  margin: 0;
  color: var(--chakra-colors-white);

  @media (min-width: 800px) {
    background: var(--chakra-colors-blackAlpha-500);
    border-radius: 12px;
    width: 80%;
    min-height: 80%;
    max-width: 1200px;
    padding: 10px;
  }
`;
