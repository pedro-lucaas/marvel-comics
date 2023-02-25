import { Flex, useDisclosure, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import './Menu.css';

const Menu: React.FC = () => {
  const navigate = useNavigate()
  const { onToggle: onToggleMenu, isOpen: menuIsOpen } = useDisclosure();

  const MAX_WIDTH = "1200px";
  return (
    <>
      <Flex cursor={"pointer"} onClick={onToggleMenu} zIndex={4} align={"center"}>
        <IconButton
          colorScheme={"yellow"}
          aria-label='Toggle Menu'
          icon={<FiMenu />}
          boxSize={"24px"}
          borderRadius={"0%"}
          h={"full"}
        />
      </Flex>
      <Flex
        className="menu"
        bg={"blackAlpha.900"}
        position={"fixed"}
        top={0}
        bottom={menuIsOpen ? 0 : "100%"}
        right={0}
        left={0}
        overflow={"hidden"}
        opacity={menuIsOpen ? 1 : 0}
        zIndex={2}
        justify={"center"}
        ml={0}
      // onClick={onToggleMenu}
      >
        <Flex flexDir={"column"} maxW={MAX_WIDTH} w={"full"} color={"white"} pt={"60px"}>
          <MenuItem action={() => navigate(routes.COMICS)}>Comics</MenuItem>
          <MenuItem action={() => navigate(routes.WATCHLIST)}>Watchlist</MenuItem>
        </Flex >
      </Flex>
    </>
  );
}

const MenuItem = ({ children, action }: { children: string, to?: string, action: () => void }) => {
  return <Flex h={"60px"} borderTop={"1px solid"} justify={"center"} align={"center"} cursor={"pointer"} onClick={() => action()}>{children}</Flex>
}

export default Menu;