import {configureStore} from "@reduxjs/toolkit";
import {createCityReducer, createAllCitiesReducer, createItinerariesByCityReducer} from "./city/cityReducers.js";

const store = configureStore({
    reducer: {
        createCityReducer: createCityReducer,
        createAllCitiesReducer: createAllCitiesReducer,
        createItinerariesByCityReducer: createItinerariesByCityReducer,
    }
})

export default store;