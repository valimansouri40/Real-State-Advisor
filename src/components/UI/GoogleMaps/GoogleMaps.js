import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
 import loc from '../../../assets/icons/icons8-location-48.png';
import React,{ useEffect, useMemo,useCallback } from 'react';
import {setRTLTextPlugin} from 'mapbox-gl'
// ES5
setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"
);
 
// in render()

const Map=React.memo((props)=>{
    const {location, setlocation}=props;
   const clickhand=(map,e)=>{
      setlocation(e.lngLat);
   }

   

 

const Map = ReactMapboxGl({ accessToken: "pk.eyJ1IjoidmFsaW1hbnNvdXI0MCIsImEiOiJja3cwd2R3MW4xMzBhMnhub3FkMmJtbWxpIn0.as6cR7RlgpnrO4-A3kPhvA" });
  //  let Map;
 
  //   Map = ReactMapboxGl({
  //     accessToken:
  //       'pk.eyJ1IjoidmFsaW1hbnNvdXI0MCIsImEiOiJja3cwd2R3MW4xMzBhMnhub3FkMmJtbWxpIn0.as6cR7RlgpnrO4-A3kPhvA'
  //   });
  
    
      
    return(<Map

            onClick={clickhand}
          center={!location?{lng: 51.82140931104777, lat: 35.73633437552455}:location}
        style="mapbox://styles/valimansour40/cl0l2i4nd005m15qg452ofa8h"
        containerStyle={{
          height: '100%',
          width: '100%',
        }}
      >
        
        {location?<Marker coordinates={[location.lng, location.lat]}><img src={loc} style={{width:'2rem',height:'2rem'}} /></Marker>:null}
        <Layer   type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[ 51.82140931104777, 35.73633437552455]} />
        </Layer>
      </Map>);

})
export default Map
