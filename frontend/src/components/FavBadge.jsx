import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, dispatch }) => {
  const handleClick = function () {
    dispatch({ type: 'OPEN_FAVS'})
  };

  return (
    <div className='fav-badge' onClick={handleClick}>
      <FavIcon selected={true} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;