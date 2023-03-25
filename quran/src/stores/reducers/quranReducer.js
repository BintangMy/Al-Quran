import { FETCH_ALL_SURAH, FETCH_DETAIL_SURAH } from "../actionType/quranActionType";

const initialState = {
  surah: [],
  oneSurah: {}
};

const quranReducer = (state = initialState, action) => {
  console.log(action.type, 'actionnnn typeeeee')
  switch (action.type) {
    case FETCH_ALL_SURAH:
      return {
        ...state,
        surah: action.payload,
      };
    case FETCH_DETAIL_SURAH:
      return {
        ...state,
        oneSurah: action.payload
      }
    default:
      return state;
  }
};

export default quranReducer