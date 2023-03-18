import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { ContDiv } from "../StyledComponent";

export default function Location() {
  const [location, setLocation] = useState({
    lat: "",
    lng: "",
  });

  const handleMapClick = (event) => {
    setLocation({
      lat: event.lat,
      lng: event.lng,
    });
  };

  const Marker = () => <div className="marker">📍</div>;

  const MapContainer = styled.div`
    width: 100%;
    height: 500px;
    margin: 1rem auto;
    border-radius: 1.5rem;
  `;
  const defaultProps = {
    center: {
      lat: 24.698931,
      lng: 46.731445,
    },
    zoom: 11,
  };

  return (
    <>
      <ContDiv title=" موقع العقار ">
        <MapContainer>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyC2-n39eQnutXECIDc-9tlNMNFmxzshDtE",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
            onClick={handleMapClick}
          >
            {location && <Marker lat={location.lat} lng={location.lng} />}
          </GoogleMapReact>
        </MapContainer>
        <p>الموقع الذي تم إختياره</p>
        <p> {location.lng} </p>
        {/* <NextButt path={PATHS.LOCATION} /> */}
      </ContDiv>
    </>
  );
}
