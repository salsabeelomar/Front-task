import Geocode from "react-geocode";
Geocode.setLanguage("en");
Geocode.setApiKey("AIzaSyC1yySSSHPEEBHeNo6E2MjRTlE6w4mLZog");

const GeoLocation = (lat, lng) => {
  let city, state, country;
  Geocode.fromLatLng(lat, lng)
    .then((response) => {
      for (let i = 0; i < response.results[0].address_components.length; i++) {
        for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
          switch (response.results[0].address_components[i].types[j]) {
            case "locality":
              city = response.results[0].address_components[i].long_name;
              break;
            case "administrative_area_level_1":
              state = response.results[0].address_components[i].long_name;
              break;
            case "country":
              country = response.results[0].address_components[i].long_name;
              break;
          }
          console.log(city, state, country);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return city, state, country;
};
export default GeoLocation;
