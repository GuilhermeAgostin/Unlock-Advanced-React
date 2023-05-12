import { useOpenStreetMap } from "./useOpenStreetMap";
import "./CustomHook.css";

export function CountryDisplay() {
  const currentLocation = useOpenStreetMap();

  function handleCurrentLocation() {
    let message = "";

    if (currentLocation.country === "") {
      message =
        "Unfortunately, we are unable to obtain the location at this time";
    }
    if (currentLocation.country !== "") {
      message = currentLocation.country;
    }

    return message;
  }

  const currentCountry = handleCurrentLocation();
  return (
    <>
      <div className="container-country-display">
        <h5>To see the country from which you're accessing this site, click on the 'show' button.</h5>
        <button
          className="button-country-display"
          onClick={() => currentLocation.setIsButtonClicked(true)}
        >
          Show
        </button>
      </div>
      <h2>
        {currentCountry ===
        "Unfortunately, we are unable to obtain the location at this time"
          ? " - "
          : currentCountry}
      </h2>
    </>
  );
}
