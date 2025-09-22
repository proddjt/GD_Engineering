import {
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';

import Marker from './Marker';

export default function Mappa(){
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={['marker']}>
      <Map
        mapId={'DEMO_MAP_ID'}
        defaultZoom={15}
        defaultCenter={{lat: 40.94973, lng: 14.29198}}
        gestureHandling={'greedy'}
        disableDefaultUI
        className="w-full h-[500px]">
        
        <Marker />
      </Map>
    </APIProvider>
  );
};

