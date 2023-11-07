import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import photos from "mocks/photos";
import topics from "mocks/topics";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        favs={state.favs}
        updateToFavPhotoIds={updateToFavPhotoIds}
        photos={photos}
        topics={topics}
        onPhotoSelect={onPhotoSelect}
      />
      {state.selectedPhoto && (
        <PhotoDetailsModal
          onPhotoSelect={onPhotoSelect}
          photos={photos}
          favs={state.favs}
          updateToFavPhotoIds={updateToFavPhotoIds}
          selectedPhoto={state.selectedPhoto}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />
      )}
    </div>
  );
};

export default App;
