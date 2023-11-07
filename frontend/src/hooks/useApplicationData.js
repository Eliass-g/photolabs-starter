import { useReducer, useEffect } from "react";

const useApplicationData = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "SET_PHOTO_DATA":
        return { ...state, photoData: action.value };
      case "SET_TOPIC_DATA":
        return { ...state, topicData: action.value };
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

  const initialState = {
    selectedPhoto: null,
    favs: [],
    isFavPhotoExist: false,
    photoData: [],
    topicData: [],
  };

  useEffect(() => {
    fetch(`/api/photos`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_PHOTO_DATA", value: data });
      });

    fetch(`/api/topics`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_TOPIC_DATA", value: data });
      });
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;
