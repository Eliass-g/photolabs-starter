import { useReducer, useEffect } from "react";

const useApplicationData = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "OPEN_FAVS":
        return {...state, openFavs: true}
      case "GET_PHOTOS_BY_TOPICS":
        return { ...state, photoData: action.value };
      case "SET_TOPIC_ID":
        return { ...state, topicId: action.value };
      case "SET_PHOTO_DATA":
        return { ...state, photoData: action.value };
      case "SET_TOPIC_DATA":
        return { ...state, topicData: action.value };
      case "SELECT_PHOTO":
        return { ...state, selectedPhoto: action.value };
      case "CLOSE_MODAL":
        return { ...state, selectedPhoto: null };
      case "UPDATE_FAV_PHOTO": {
        if (state.favs.find((fav) => fav.id === action.value.id)) {
          return {
            ...state,
            favs: [...state.favs.filter((item) => item["id"] !== action.value['id'])],
          };
        } else {
          return { ...state, favs: [...state.favs, action.value] };
        }
      }
    }
  }

  const initialState = {
    selectedPhoto: null,
    favs: [],
    photoData: [],
    topicData: [],
    topicId: null,
    openFavs: false
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

  useEffect(() => {
    if (state.topicId !== null) {
      fetch(`/api/topics/photos/${state.topicId}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "GET_PHOTOS_BY_TOPICS", value: data });
        });
    }
  }, [state.topicId]);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;
