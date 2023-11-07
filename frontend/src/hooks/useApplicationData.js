import { useReducer, useState } from "react";

const useApplicationData = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "SELECT_PHOTO":
        return { ...state, selectedPhoto: action.value };
      case "CLOSE_MODAL":
        return { ...state, selectedPhoto: null };
      case "UPDATE_FAV_PHOTO": {
        if (state.favs.includes(action.value["id"])) {
          return {
            ...state,
            favs: [...state.favs.filter((item) => item !== action.value["id"])],
          };
        } else {
          return { ...state, favs: [...state.favs, action.value["id"]] };
        }
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    selectedPhoto: null,
    favs: [],
    isFavPhotoExist: false,
  });

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;
