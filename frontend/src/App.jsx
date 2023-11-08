import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, dispatch } = useApplicationData();
  return (
    <div className="App">
      {!state.openFavs && (
      <HomeRoute
        favs={state.favs}
        photos={state.photoData}
        topics={state.topicData}
        dispatch={dispatch}
      />)}
      {state.selectedPhoto && (
        <PhotoDetailsModal
          dispatch={dispatch}
          photos={state.photoData}
          favs={state.favs}
          selectedPhoto={state.selectedPhoto}
        />
      )}
      {state.openFavs && (
      <HomeRoute
        favs={state.favs}
        photos={state.favs}
        topics={state.topicData}
        dispatch={dispatch}
      />)}
    </div>
  );
};

export default App;