import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import quranReducer from "./reducers/quranReducer";
import tafsirReducer from "./reducers/tafsirReducer";
import doaReducer from "./reducers/doaReducer";
import jadwalReducer from "./reducers/jadwalReducer";

const rootReducer = combineReducers({
    quran: quranReducer,
    tafsir: tafsirReducer,
    doa: doaReducer,
    schedule: jadwalReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store