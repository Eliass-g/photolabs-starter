import React from "react";
import PhotoFavButton from "components/PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  photos,
  favs,
  updateToFavPhotoIds,
  onPhotoSelect,
  selectedPhoto,
  onClosePhotoDetailsModal,
}) => {
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={onClosePhotoDetailsModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton id={selectedPhoto.id} favs={favs} updateToFavPhotoIds={updateToFavPhotoIds} />
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
          photos={Object.values(photos[selectedPhoto.id].similar_photos)}
          favs={favs}
          updateToFavPhotoIds={updateToFavPhotoIds}
          onPhotoSelect={onPhotoSelect}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
