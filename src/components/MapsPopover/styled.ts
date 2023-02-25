import styled from "styled-components";
import { Box, BoxProps } from "@chakra-ui/react";

export const Marker = styled(Box) <BoxProps>`
  background: var(--chakra-colors-red-500);
  border-radius: 50%;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
  width: 20px;
  height: 20px;
  border: 3px solid var(--chakra-colors-white);
  cursor: pointer;

   &::before {
     content: "";
     position: absolute;
     top: 100%;
     left: 50%;
     transform: translate(-50%, 0%);
     width: 2px;
     height: 100%;
     background: var(--chakra-colors-red-500);
   }
`;

