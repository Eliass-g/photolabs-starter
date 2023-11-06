import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favs, setFavs, setExist, modal, openModal, setOpenModal }) => {
  const photolist = photos.map((data) => {
    return (
      <PhotoListItem
        key={data.id}
        {...data}
        favs={favs}
        setFavs={setFavs}
        setExist={setExist}
        modal={modal}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    );
  });
  return <ul className="photo-list">{photolist}</ul>;
};

export default PhotoList;
