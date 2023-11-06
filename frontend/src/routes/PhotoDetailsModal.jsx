import React from "react";
import PhotoFavButton from "components/PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({
  onPhotoSelect,
  setPhotoSelected,
  setOpenModal,
}) => {
  const handleClick = function () {
    setOpenModal(false);
    setPhotoSelected({});
  };
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleClick}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <div>
          <PhotoFavButton
            id={onPhotoSelect.id}
          />
          <img
            className="photo-details-modal__images"
            src={onPhotoSelect.largeImg}
            /* onClick={handleClick} */
          />
        </div>
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={onPhotoSelect.profile} />
          <div>
            <div className="photo-details-modal__photographer-info">{onPhotoSelect.name}</div>
            <div className="photo-details-modal__photographer-info photo-details-modal__photographer-location">
              {onPhotoSelect.city}, {onPhotoSelect.country}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
