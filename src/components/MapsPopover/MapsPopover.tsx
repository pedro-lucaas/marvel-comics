import { Box, Button, Flex, Icon, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, useDisclosure } from '@chakra-ui/react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import React from 'react';
import { Marker } from './styled';
import { RiMapPin2Line } from 'react-icons/ri';
import { SiGooglemaps } from 'react-icons/si';

export type GoogleMapsProps = {
  setDeliveryAddress: React.Dispatch<React.SetStateAction<string>>;
};

const GoogleMaps: React.FC<GoogleMapsProps> = ({ setDeliveryAddress }) => {
  const [map, setMap] = React.useState<google.maps.Map | null>(null)
  const { isOpen: isSetingLocalization, onToggle } = useDisclosure()

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBjlUwoZ5eRBmt7UCU-kWZsJ_lnWNc9YZM"
  })

  const onLoadMap = React.useCallback(function callback(map: google.maps.Map) {
    map.setZoom(15);
    map.setOptions({
      disableDefaultUI: true,
      zoomControl: false,
      mapTypeControl: false,
      disableDoubleClickZoom: true,
    });
    navigator.geolocation.getCurrentPosition((position) => {
      map.setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    });
    setMap(map)
  }, [])

  const setLocation = () => {
    if (map) {
      const center = map.getCenter();
      if (center) {
        const geocoder = new google.maps.Geocoder();
        const latlng = { lat: center.lat(), lng: center.lng() };
        geocoder.geocode({ location: latlng }, (results, status) => {
          if (status === "OK") {
            if (results && results[0]) {
              setDeliveryAddress(results[0].formatted_address)
            }
          }
        });
      }
    }
    onToggle()
  }

  return <Flex>
    <Button colorScheme={"red"} onClick={onToggle} w={"100%"}>Entregar em</Button>
    <Popover isOpen={isSetingLocalization} onClose={onToggle} placement={"left"}>
      <PopoverTrigger>
        <Box>
          <Icon as={SiGooglemaps} ml={2} h={"100%"} />
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Flex h={"500px"} position={"relative"} direction={"column"}>
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                zoom={15}
                onLoad={onLoadMap}
              >
              </GoogleMap>
            )}
            <Marker />
            <Button w={"100%"} colorScheme={"yellow"} onClick={setLocation}>
              Definir localização
              <Icon as={RiMapPin2Line} ml={2} />
            </Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  </Flex>
    ;
}

export default GoogleMaps;