import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ id, favs, setFavs, setExist }) {
  
  const [fav, setFav] = useState(false);
  
  const handleClick = () => {
    const array = favs;
    if (array.includes(id)) {
      array.splice(array.indexOf(id), 1);
      setFav(false);
    } else {
      array.push(id);
      setFav(true);
    }
    setFavs(array);
    setExist();
  };

  return (
    <div className="photo-list__fav-icon" onClick={() => handleClick()}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={fav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
