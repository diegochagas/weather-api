import React from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';

// import { Container } from './styles';

export default function GoogleMapContainer(props) {
  function setMapProperties(map) {
    map.setZoom(12);

    map.setCenter({ lat: props.lat, lng: props.lon });
  }

  return withGoogleMap(() => <GoogleMap ref={map => setMapProperties(map)} />);
}
