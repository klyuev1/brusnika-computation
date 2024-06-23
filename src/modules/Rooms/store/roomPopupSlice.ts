import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  isCreateRoomPopupOpen: boolean;
  isDuplicateFloorPopupOpen: boolean;
  isChangeUserPopupOpen: boolean;
}

const initialState: PopupState = {
  isCreateRoomPopupOpen: false,
  isDuplicateFloorPopupOpen: false,
  isChangeUserPopupOpen: false
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
    },
    openChangeUserPopupOpen(state) {
      state.isChangeUserPopupOpen = true;
    },
    closeChangeUserPopupOpen(state) {
      state.isChangeUserPopupOpen = false;
    }
  }
});

export const {
  openCreateRoomPopup,
  closeCreateRoomPopup,
  openDuplicateFloorPopup,
  closeDuplicateFloorPopup,
  openChangeUserPopupOpen,
  closeChangeUserPopupOpen
} = roomPopupSlice.actions;
export default roomPopupSlice.reducer;
