import * as React from "react";

type Coordinates = {
  latitude: string;
  longitude: string;
  backgroundColor: string;
};

const StaticMap = (props: Coordinates) => {
  const { latitude, longitude, backgroundColor } = props;

  return (
    <>
      <img
        className="w-full border-8 rounded-xl"
        style={{ borderColor: backgroundColor }}
        width="300"
        height="200"
        src={
          "https://maps.googleapis.com/maps/api/staticmap?center=" +
          `${latitude}` +
          "," +
          `${longitude}` +
          "&zoom=14&size=600x400&maptype=roadmap&markers=color:red%7Clabel:LL%7C" +
          `${latitude}` +
          "," +
          `${longitude}` +
          "&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18"
        }
      ></img>
    </>
  );
};

export default StaticMap;
