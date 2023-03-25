import { FETCH_ALL_SURAH, FETCH_DETAIL_SURAH } from "../actionType/quranActionType";
import axios from 'axios';

const mainUrl = "https://equran.id/api/v2/surat"
export const actionSetAllSurah = (payload) => {
    return {
        type: FETCH_ALL_SURAH,
        payload,
    };
};

export const actionSetDetailSurah = (payload) => {
    return {
        type: FETCH_DETAIL_SURAH,
        payload
    }
}

export const fetchAllSurah = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(mainUrl);
            dispatch(actionSetAllSurah(data.data));
        } catch (error) {
            console.error("Error fetching all surah:", error);
        }
    };
};


export const fetchDetailSurah = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${mainUrl}/${id}`)
            console.log(data, '>>>>>>>>>>>>>>.')
            dispatch(actionSetDetailSurah(data.data))
        } catch (error) {
            console.error("Error fetching detail surah:", error);
        }
    }
}