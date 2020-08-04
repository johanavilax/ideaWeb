import React from "react";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker 
} from "react-google-maps";
import mapStyles from "../components/mapStyles";

const Map = ()=>{
    return (
        <GoogleMap 
            defaultZoom={20}
            defaultCenter={{lat:4.711378, lng: -74.202973}}
            defaultOptions={{styles:mapStyles,fullscreenControl: false}}
            
        >
            <Marker position={{lat:4.711378, lng: -74.202973}}
            title="IDEA SAS"
            />
            </GoogleMap>
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
)