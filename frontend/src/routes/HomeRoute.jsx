import React, { useState } from "react";

import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, modal, openModal, setOpenModal, setPhotoSelected}) => {
  const [favs, setFavs] = useState([]);
  const [isFavPhotoExist, setFavPhotoExist] = useState(false);

  const setExist = function () {
    if (favs.length === 0) {
      setFavPhotoExist(false);
    } else {
      setFavPhotoExist(true);
    }
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        favs={favs}
        setFavs={setFavs}
        setExist={setExist}
        modal={modal}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
