import { FETCH_ALL_TAFSIR_SURAH, FETCH_TAFSIR_SURAH } from "../actionType/tafsirActionType";

const initialState = {
  surah: [],
  oneTafsir: {},
};

const tafsirReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_TAFSIR_SURAH:
      return {
        ...state,
        surah: action.payload,
      };
      case FETCH_TAFSIR_SURAH: 
      return {
        ...state,
        oneTafsir: action.payload,
      };
    default:
      return state;
  }
};

export default tafsirReducer;
