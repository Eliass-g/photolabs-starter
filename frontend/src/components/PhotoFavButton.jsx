import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

//favourite icon for photos, functionality and display
function PhotoFavButton({ selectedPhoto, favs, dispatch }) {
  
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => dispatch({ type: "UPDATE_FAV_PHOTO", value:  selectedPhoto  })}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favs.find((fav) => fav.id === selectedPhoto.id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
