import React from 'react';
import { Marker } from 'react-native-maps';
function CarPin(props) {
  const {coord} = props;
  return (
    <Marker
      coordinate={coord}
      tracksViewChanges={false}
    />
  );
}
export default CarMarker = React.memo(CarPin);
