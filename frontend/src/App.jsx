import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import photos from "mocks/photos";
import topics from "mocks/topics";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, dispatch, onLoadTopic } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        favs={state.favs}
        photos={photos}
        topics={topics}
        dispatch={dispatch}
      />
      {state.selectedPhoto && (
        <PhotoDetailsModal
          dispatch={dispatch}
          photos={photos}
          favs={state.favs}
          selectedPhoto={state.selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
