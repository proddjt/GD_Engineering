import {useState} from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

export default function Marker(){
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={{lat: 40.94973, lng: 14.29198}}
        title={'Global Division Engineering srls'}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}>
          <div className='text-black font-bold select-text'>Global Division Engineering srls</div>
          <div className='text-black select-text'>Via Giacomo Leopardi, 17 - Crispano (NA)</div>
        </InfoWindow>
      )}
    </>
  );
};