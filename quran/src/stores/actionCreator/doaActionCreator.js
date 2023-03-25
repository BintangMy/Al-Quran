import { FETCH_ALL_DOA, FETCH_DETAIL_DOA } from "../actionType/doaActionType";
import axios from 'axios';

const mainUrl = "https://equran.id/api/doa"
export const actionSetAllDoa = (payload) => {
    return {
        type: FETCH_ALL_DOA,
        payload,
    };
};

export const actionSetDetailDoa = (payload) => {
    return {
        type: FETCH_DETAIL_DOA,
        payload
    }
}

export const fetchAllDoa = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(mainUrl);
            dispatch(actionSetAllDoa(data));
        } catch (error) {
            console.error("Error fetching all Doa:", error);
        }
    };
};


export const fetchDetailDoa = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${mainUrl}/${id}`)
            console.log(data, '>>>>>>>>>>>>>>.')
            dispatch(actionSetDetailDoa(data))
        } catch (error) {
            console.error("Error fetching detail Doa:", error);
        }
    }
}