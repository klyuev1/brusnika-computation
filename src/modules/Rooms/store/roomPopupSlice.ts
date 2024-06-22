import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  isCreateRoomPopupOpen: boolean;
  isDuplicateFloorPopupOpen: boolean;
}

const initialState: PopupState = {
  isCreateRoomPopupOpen: false,
  isDuplicateFloorPopupOpen: false
};

const roomPopupSlice = createSlice({
  name: "roomPopup",
  initialState,
  reducers: {
    openCreateRoomPopup(state) {
      state.isCreateRoomPopupOpen = true;
    },
    closeCreateRoomPopup(state) {
      state.isCreateRoomPopupOpen = false;
    },
    openDuplicateFloorPopup(state) {
      state.isDuplicateFloorPopupOpen = true;
    },
    closeDuplicateFloorPopup(state) {
      state.isDuplicateFloorPopupOpen = false;
    }
  }
});

export const { openCreateRoomPopup, closeCreateRoomPopup, openDuplicateFloorPopup, closeDuplicateFloorPopup } =
  roomPopupSlice.actions;
export default roomPopupSlice.reducer;
