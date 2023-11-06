import React, { useState, Fragment } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const handleClick = function () {
    props.setOpenModal(true);
    props.setPhotoSelected({
      id: props.id,
      name: props.user.name,
      city: props.location.city,
      country: props.location.country,
      profile: props.user.profile,
      largeImg: props.urls.full,
      regImg: props.urls.regular
    });
  };
  return (
    <div className="photo-list__item">
      <div>
        <PhotoFavButton
          id={props.id}
          favs={props.favs}
          setFavs={props.setFavs}
          setExist={props.setExist}
        />
        <img
          className="photo-list__image"
          src={props.urls.regular}
          onClick={handleClick}
        />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.user.profile} />
        <div>
          <div className="photo-list__user-info">{props.user.name}</div>
          <div className="photo-list__user-info photo-list__user-location">
            {props.location.city}, {props.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
