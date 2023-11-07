import { useState } from "react";

const useApplicationData = () => {
  const [state, setState] = useState({
    selectedPhoto: null,
    favs: [],
    isFavPhotoExist: false,
  });
  const onPhotoSelect = (photo) => {
    setState({ ...state, selectedPhoto: photo });
  };
  const onClosePhotoDetailsModal = () => onPhotoSelect(null);
  const updateToFavPhotoIds = (id) => {
    if (state.favs.includes(id)) {
      setState({
        ...state,
        favs: [...state.favs.filter((item) => item !== id)],
      });
    } else {
      setState({ ...state, favs: [...state.favs, id] });
    }
  };
  return {
    state,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
  };
};

export default useApplicationData;
