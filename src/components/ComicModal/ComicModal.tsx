import React from 'react';
import { Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Image, Flex, Box, useMediaQuery, Button, useDisclosure, ButtonGroup, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Icon, VStack } from '@chakra-ui/react';
import { MapsPopover } from '../MapsPopover';
import { ModalContent } from './styled';
import { MdCheckCircleOutline } from 'react-icons/md';
import { format, isValid } from 'date-fns';
import { Comic } from '../../services/api/comics/type';

export type ComicModalProps = {
  isOpen: boolean;
  onClose: () => void;
  comic: Comic;
};

const ComicModal: React.FC<ComicModalProps> = ({ isOpen, onClose, comic }) => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [deliveryAddress, setDeliveryAddress] = React.useState<string>('')
  const onSaleDate = new Date(comic.dates[0].date)

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior="inside">
      <ModalOverlay backdropFilter={"blur(15px)"} />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <VStack gap={"50px"} minH={"100%"}>
            <Flex direction={isLargerThan800 ? "row" : "column"} flex={1}>
              <Box h={"100%"} maxW={"350px"}>
                <Image w={"100%"} src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
              </Box>
              <Flex direction={"column"} minW={"400px"} maxW={"600px"}>
                <ModalHeader p={"10px"} w={"100%"}>{comic.title}</ModalHeader>
                {isValid(onSaleDate) && (
                  <Box p={"10px"}>
                    <Text fontSize={"md"} fontWeight={"bold"}>Published Date</Text>
                    <Text fontSize={"md"}>{format(onSaleDate, "PPPP")}</Text>
                  </Box>
                )}

                <Flex columnGap={"80px"} flexWrap={"wrap"} direction={isLargerThan800 ? "row" : "column"}>
                  {comic.creators.items.map((creator, index) => (
                    <Box p={"10px"} key={index}>
                      <Text fontSize={"md"} fontWeight={"bold"} textTransform={"capitalize"}>{creator.role}</Text>
                      <Text fontSize={"md"}>{creator.name}</Text>
                    </Box>
                  ))}
                </Flex>
                <Box p={"10px"}>{comic.description}</Box>
                <Box p={"10px"}>
                  <Text fontSize={"md"} fontWeight={"bold"}>Preço</Text>
                  <Text fontSize={"md"}>{comic.prices[0].price}</Text>
                </Box>
              </Flex>
            </Flex>

            {deliveryAddress &&
              <Flex alignItems={"center"}>
                Entregar em: {deliveryAddress}<Icon as={MdCheckCircleOutline} color={"green"} ml={2} boxSize={"24px"} />
              </Flex>
            }

            <MapsPopover setDeliveryAddress={setDeliveryAddress} />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal >
  );
}

export default ComicModal;