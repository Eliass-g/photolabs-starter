import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, dispatch, onLoadTopic } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        favs={state.favs}
        photos={state.photoData}
        topics={state.topicData}
        dispatch={dispatch}
      />
      {state.selectedPhoto && (
        <PhotoDetailsModal
          dispatch={dispatch}
          photos={state.photoData}
          favs={state.favs}
          selectedPhoto={state.selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
