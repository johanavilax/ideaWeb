import React from "react";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker 
} from "react-google-maps";

const Map = ()=>{
    return (
        <GoogleMap 
            defaultZoom={80}
            defaultCenter={{lat:4.711378, lng: -74.202973}}
        >
            <Marker position={{lat:4.711378, lng: -74.202973}}/>
            </GoogleMap>
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
)