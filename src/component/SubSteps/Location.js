import React, { useContext, useState } from "react";
import GoogleMapReact from "google-map-react";
import { ContDiv, GrayText, MapContainer, ThPa } from "../StyledComponent";
import CosTitle from "../CosTitle";
import { Items } from "../../Context/itemsContext";
import NextBtn from "../StepsContent/Operation/NextBtn";
import { currentItems } from "../../Context/Current";
import { ImLocation2 } from "react-icons/im";
import Geocode from "react-geocode";

Geocode.setLanguage("ar");
Geocode.setApiKey("AIzaSyC1yySSSHPEEBHeNo6E2MjRTlE6w4mLZog");
const Location = () => {
  const { current, setStep, setPercent } = useContext(currentItems);
  const { setItems } = useContext(Items);
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({
    lat: "",
    lng: "",
  });
  const getAddress = (lat, lng) =>
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        setAddress(response.results[0].formatted_address);
      },
      (error) => {
        console.error(error);
      }
    );
  const handleMapClick = (event) => {
    setLocation({
      lat: event.lat,
      lng: event.lng,
    });
    getAddress(location.lat, location.lng);
  };

  const Marker = () => <div className="marker">{<ImLocation2 style={{ color: "#D84E67", fontSize: "24px" }} />}</div>;

  const defaultProps = {
    center: {
      lat: 24.698931,
      lng: 46.731445,
    },
    zoom: 11,
  };

  return (
    <ContDiv>
      <CosTitle title=" موقع العقار " />
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
      <ThPa>الموقع الذي تم إختياره</ThPa>
      <GrayText> {address}</GrayText>
      <NextBtn
        cb={() => {
          if (address !== "") {
            setStep(2);
            setPercent(35);
            setItems((prev) => {
              prev[current - 2].info.Address = address;
              return prev;
            });
          }
        }}
      />
    </ContDiv>
  );
};
export default Location;
