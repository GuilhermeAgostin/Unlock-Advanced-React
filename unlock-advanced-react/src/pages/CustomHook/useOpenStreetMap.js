import { useState, useEffect } from "react";

export function useOpenStreetMap() {
  const [country, setCountry] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const onSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    )
      .then((response) => response.json())
      .then((data) => setCountry(data.address.country))
      .catch((error) => console.error(error));
  };

  const onError = (error) => {
    alert("Unfortunately, we were unable to obtain your location at this time");
  };

  useEffect(() => {
    if (isButtonClicked) {
      navigator.geolocation.watchPosition(onSuccess, onError);
    }
  }, [isButtonClicked]);

  return { country, setIsButtonClicked };
}
