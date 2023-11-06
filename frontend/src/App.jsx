import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import photos from "mocks/photos";
import topics from "mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [onPhotoSelect, setPhotoSelected] = useState({});
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setPhotoSelected={setPhotoSelected}
      />
      {openModal && <PhotoDetailsModal onPhotoSelect={onPhotoSelect} setPhotoSelected={setPhotoSelected} setOpenModal={setOpenModal}/>}
    </div>
  );
};

export default App;
