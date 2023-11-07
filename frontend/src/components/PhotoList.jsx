import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({
  photos,
  favs,
  updateToFavPhotoIds,
  onPhotoSelect
}) => {
  const photolist = photos.map((data) => {
    return (
      <PhotoListItem
        key={data.id}
        {...data}
        favs={favs}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
    );
  });
  return <ul className="photo-list">{photolist}</ul>;
};

export default PhotoList;
