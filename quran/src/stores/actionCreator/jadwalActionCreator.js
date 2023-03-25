import { FETCH_ALL_CITY, FETCH_SCHEDULE } from "../actionType/jadwalSholatType";
import axios from 'axios';

const cityUrl = "https://api.banghasan.com/sholat/format/json/kota"
export const actionSetCity = (payload) => {
    return {
        type: FETCH_ALL_CITY,
        payload,
    };
};


export const actionSetOneCity = (payload) => {
    return {
        type: FETCH_SCHEDULE,
        payload,
    };
};

export const fetchCity = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(cityUrl);
            // console.log(data, ":::::::::::::::::::::::::::")
            dispatch(actionSetCity(data.kota));
        } catch (error) {
            console.log("Error fetching all Doa:", error);
        }
    };
};



export const fetchOneCity = (dataCity) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0,10);
    console.log(dataCity, "dataaaaaaaaaaaaa");
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${dataCity.cityCode}/tanggal/${formattedDate}`);
            console.log(data.jadwal, ":::::::::::::::::::::::::::");
            dispatch(actionSetOneCity(data.jadwal));
        } catch (error) {
            console.log("Error fetching all Jadwal:", error);
        }
    };
};
