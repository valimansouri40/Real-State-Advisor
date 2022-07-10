// import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
//  import loc from '../../../assets/icons/icons8-location-48.png';
//  import React from 'react';
// //  import {Map, Marker} from 'pigeon-maps'
// //  import { osm } from 'pigeon-maps/providers'
// import {setRTLTextPlugin} from 'mapbox-gl'
// // ES5
// setRTLTextPlugin(
//   "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"
// );
 
// // in render()

// const Map=React.memo((props)=>{
//     const {location, setlocation}=props;
//    const clickhand=(map,e)=>{
//       setlocation(e.lngLat);
      
//    }

   

 

// const Map = ReactMapboxGl({ accessToken:
//    "pk.eyJ1IjoidmFsaW1hbnNvdXI0MCIsImEiOiJja3cwd2R3MW4xMzBhMnhub3FkMmJtbWxpIn0.as6cR7RlgpnrO4-A3kPhvA" });
//   //  let Map;
 
//   //   Map = ReactMapboxGl({
//   //     accessToken:
//   //       'pk.eyJ1IjoidmFsaW1hbnNvdXI0MCIsImEiOiJja3cwd2R3MW4xMzBhMnhub3FkMmJtbWxpIn0.as6cR7RlgpnrO4-A3kPhvA'
//   //   });
  
    
      
//     return(<Map

//             onClick={clickhand}
//           center={!location?{lng: 52.04803569890953, lat: 35.70417237476623}:location}
//         style="mapbox://styles/valimansour40/cl0l2i4nd005m15qg452ofa8h"
//         containerStyle={{
//           height: '100%',
//           width: '100%',
//         }}
//       >
        
//         {location?<Marker coordinates={[location.lng, location.lat]}><img src={loc} style={{width:'2rem',height:'2rem'}} /></Marker>:null}
//         <Layer   type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
//           <Feature coordinates={[ 51.82140931104777, 35.73633437552455]} />
//         </Layer>
//       </Map>);

// })
// export default Map
import React,{useEffect, useRef, useState} from "react";
import {Marker, MapContainer,TileLayer,useMapEvents,Popup} from "react-leaflet";
// import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
// import "./app.css";

function LocationMarker({location, setlocation}) {
    
    const map = useMapEvents({
      click(e) {
        map.locate()
        
        setlocation(e.latlng)
      },
      locationfound(e) {
       
       
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return !location ? null : (
      <Marker  position={location}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
  
  const Map = (props)=>{
      const {location, setlocation}=props;
      // const leafelt = useRef();
      // useEffect(()=>{
      //     console.log(leafelt.current ,'ashdusi')
      // },[location])
  return(
    <MapContainer
      center={location?{lat: location.lat - .04, lng: location.lng }:{lat: 35.71775624430298, lng: 52.068057236962076}}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker location={location} setlocation={setlocation} />
    </MapContainer>
  ) 
}

export default Map

// const position = [51.505, -0.09]

// import React from "react";
// import { Map, Draggable,ZoomControl, Marker } from "pigeon-maps";

// const  MyMap= React.memo((props)=> {

//   const {location, setlocation}=props;
  

//     // useEffect(()=>{
//     //     if(location){
//     //       setAnchor([location.lat, location.lng])
//     //     }
//     // },[])
//     const changeloc=(e)=>{
//         const latLng = {lat:e.latLng[0], lng:e.latLng[1]  }
        
//         // console.log(e.latLng)
//         // setAnchor([e.latLng[0] - .025, e.latLng[1] + .015 ]);
//         setlocation(e.latLng);
//     }

//     console.log(location)
//   return (
//       <div dir="ltr">
//     <Map height={800} onClick={changeloc} defaultCenter={location?location:[36.42136881835634, 53.4709331680441]} defaultZoom={11}>
//         <ZoomControl/>
//       <Draggable offset={[60, 87]} anchor={location?location:[36.42136881835634, 53.4709331680441]} 
//       onDragEnd={setlocation}>
//         <img src="https://img.icons8.com/ios-filled/64/000000/bookmark-ribbon.png" 
//         width={50} height={50} alt="Pigeon!" />
        
//       </Draggable>
//     </Map>
//     </div>
//   );
// })

// export default MyMap;


// render(
//   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//     <TileLayer
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Marker position={position}>
//       <Popup>
//         A pretty CSS3 popup. <br /> Easily customizable.
//       </Popup>
//     </Marker>
//   </MapContainer>
// )