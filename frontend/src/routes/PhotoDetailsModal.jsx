import React from "react";
import PhotoFavButton from "components/PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

//displays the modal of the photo once clicked
const PhotoDetailsModal = ({ photos, favs, dispatch, selectedPhoto }) => {
  function handleClick() {
    dispatch({ type: "CLOSE_MODAL" });
  }
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleClick}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          selectedPhoto={selectedPhoto}
          favs={favs}
          dispatch={dispatch}
        />
        <img
          className="photo-details-modal__image"
          src={selectedPhoto.urls.full}
        />

        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={selectedPhoto.user.profile}
          />
          <div>
            <div className="photo-details-modal__photographer-info">
              {selectedPhoto.user.name}
            </div>
            <div className="photo-details-modal__photographer-info photo-details-modal__photographer-location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </div>
          </div>
        </div>
      </div>

      <div className="photo-details-modal__images">
        <header className="photo-details-modal__header">Similar Photos</header>
        <PhotoList
          photos={Object.values(
            photos.find((photo) => photo.id === selectedPhoto.id).similar_photos
          )}
          favs={favs}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
