import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiProjectSlice } from "../modules/Projects/api/apiProjectSlice";
import projectIDReducer from '../modules/Rooms/store/projectIDSlice';
import { apiRoomSlice } from "../modules/Rooms/api/apiRoomSlice";
import selectedRoomSlice from "../modules/Rooms/store/selectedRoomSlice";
import { apiFacadeSlice } from "../modules/Facades/api/apiFacadeSlice";
import selectedFacadeSlice from "../modules/Facades/store/selectedFacadeSlice";
import { apiProfileSlice } from "./api/apiProfileSlice";
import authReducer from "./reducers/authSlice";
import projectPopupSlice from "../modules/Projects/store/projectPopupSlice";
import facadePopupSlice from "../modules/Facades/store/facadePopupSlice";
import infoTooltipFacadeSlice from "../modules/Facades/store/infoTooltipFacadeSlice";
import roomPopupSlice from "../modules/Rooms/store/roomPopupSlice";
import infoTooltipProfileSlice from "../modules/Profile/store/infoTooltipProfileSlice";
import infoTooltipLoginSlice from "../modules/Login/store/infoTooltipLoginSlice";
import infoTooltipRegisterSlice from "../modules/Register/store/infoTooltipRegisterSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  projectID: projectIDReducer,
  selectedRoom: selectedRoomSlice,
  selectedFacade: selectedFacadeSlice,
  // popups
  projectPopup: projectPopupSlice,
  facadePopup: facadePopupSlice,
  roomPopup: roomPopupSlice,

  // infoTooltips
  infoTooltipFacade: infoTooltipFacadeSlice,
  infoTooltipProfile: infoTooltipProfileSlice,
  infoTooltipLogin: infoTooltipLoginSlice,
  infoTooltipRegister: infoTooltipRegisterSlice,

  [apiProjectSlice.reducerPath]: apiProjectSlice.reducer,
  [apiRoomSlice.reducerPath]: apiRoomSlice.reducer,
  [apiFacadeSlice.reducerPath]: apiFacadeSlice.reducer,
  [apiProfileSlice.reducerPath]: apiProfileSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiProjectSlice.middleware, apiRoomSlice.middleware, apiFacadeSlice.middleware, apiProfileSlice.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];