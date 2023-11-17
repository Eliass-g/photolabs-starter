import React, { useState } from "react";

import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

//home route containing the navigation bar and photos
const HomeRoute = ({ photos, topics, dispatch, favs }) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={favs.length > 0}
        dispatch={dispatch}
      />
      <PhotoList photos={photos} favs={favs} dispatch={dispatch} />
    </div>
  );
};

export default HomeRoute;
