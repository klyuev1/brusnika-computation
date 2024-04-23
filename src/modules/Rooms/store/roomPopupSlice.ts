import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  isCreateRoomPopupOpen: boolean;
}

const initialState: PopupState = {
  isCreateRoomPopupOpen: false,
};

const roomPopupSlice = createSlice({
  name: 'roomPopup',
  initialState,
  reducers: {
    openCreateRoomPopup(state) {
      state.isCreateRoomPopupOpen = true;
    },
    closeCreateRoomPopup(state) {
      state.isCreateRoomPopupOpen = false;
    }
  },
});

export const { 
  
  openCreateRoomPopup,
  closeCreateRoomPopup,

  } = roomPopupSlice.actions;
export default roomPopupSlice.reducer;