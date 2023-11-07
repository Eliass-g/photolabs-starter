import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({id, user, location, urls, onPhotoSelect, updateToFavPhotoIds, favs}) => {
  const handleClick = function () {
    onPhotoSelect({
      id,
      user,
      location,
      urls
    });
  };
  return (
    <div className="photo-list__item">
      <div>
        <PhotoFavButton
          id={id}
          favs={favs}
          updateToFavPhotoIds={updateToFavPhotoIds}
        />
        <img
          className="photo-list__image"
          src={urls.regular}
          onClick={handleClick}
        />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} />
        <div>
          <div className="photo-list__user-info">{user.name}</div>
          <div className="photo-list__user-info photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
