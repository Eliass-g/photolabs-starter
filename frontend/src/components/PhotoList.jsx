import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

//lists out each photo
const PhotoList = ({
  photos,
  favs,
  dispatch
}) => {
  const photolist = photos.map((data) => {
    return (
      <PhotoListItem
        key={data.id}
        {...data}
        selectedPhoto={data}
        favs={favs}
        dispatch={dispatch}
      />
    );
  });
  return <ul className="photo-list">{photolist}</ul>;
};

export default PhotoList;
