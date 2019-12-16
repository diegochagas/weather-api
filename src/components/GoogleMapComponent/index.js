import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// import { Container } from './styles';

export default function GoogleMapComponent(props) {
  const { lat, lng } = props;

  const MyMapComponent = withGoogleMap(mapProps => {
    return (
      <GoogleMap defaultZoom={12} defaultCenter={{ lat, lng }}>
        {mapProps.isMarkerShown && <Marker position={{ lat, lng }} />}
      </GoogleMap>
    );
  });

  return <MyMapComponent isMarkerShown={false} />;
}
