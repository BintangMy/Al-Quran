import { FETCH_ALL_CITY, FETCH_SCHEDULE } from "../actionType/jadwalSholatType";

const initialState = {
  allCity: [],
  oneCity: {},
};

const jadwalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CITY:
      return {
        ...state,
        allCity: action.payload,
      };
      case FETCH_SCHEDULE: 
      return {
        ...state,
        oneCity: action.payload,
      };
    default:
      return state;
  }
};

export default jadwalReducer;
