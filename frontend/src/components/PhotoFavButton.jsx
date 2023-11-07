import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ id, favs, dispatch }) {
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => dispatch({ type: "UPDATE_FAV_PHOTO", value: { id } })}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favs.includes(id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
