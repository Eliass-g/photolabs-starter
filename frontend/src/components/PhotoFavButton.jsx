import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ id, favs, updateToFavPhotoIds }) {
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => updateToFavPhotoIds(id)}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favs.includes(id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
