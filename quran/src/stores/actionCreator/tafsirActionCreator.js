import { FETCH_ALL_TAFSIR_SURAH, FETCH_TAFSIR_SURAH } from "../actionType/tafsirActionType";
import axios from "axios";

const mainUrl = "https://equran.id/api/v2"

export const actionSetAllSurahTafsir = (payload) => {
    return {
        type: FETCH_ALL_TAFSIR_SURAH,
        payload
    }
}

export const actionSetDetailTafsir = (payload) => {
    return {
        type: FETCH_TAFSIR_SURAH,
        payload
    }
}

export const fetchAllSurahTafsir = () => {
    return async(dispatch) => {
        try {
            const {data} = await axios.get(`${mainUrl}/surat`)
            console.log(data, 'ini dari tafsir <<<<<<<<<<<')
            dispatch(actionSetAllSurahTafsir(data.data))
        } catch (error) {
            console.error("Error fetching all surah tafsir:", error);
        }
    }
}

export const fetchDetailTafsir = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${mainUrl}/tafsir/${id}`)
            console.log(data, '>>>>>>>>>>>>>>..................')
            dispatch(actionSetDetailTafsir(data.data))
        } catch (error) {
            console.error("Error fetching detail surah:", error);
        }
    }
}