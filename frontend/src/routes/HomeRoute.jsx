import React, { useState } from "react";

import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  onPhotoSelect,
  favs,
  updateToFavPhotoIds,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favs.length > 0} />
      <PhotoList
        photos={photos}
        favs={favs}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
    </div>
  );
};

export default HomeRoute;
