import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  isCreateFacadePopupOpen: boolean;
}

const initialState: PopupState = {
  isCreateFacadePopupOpen: false,
};

const facadePopupSlice = createSlice({
  name: 'facadePopup',
  initialState,
  reducers: {
    openCreateFacadePopup(state) {
      state.isCreateFacadePopupOpen = true;
    },
    closeCreateFacadePopup(state) {
      state.isCreateFacadePopupOpen = false;
    },
  },
});

export const { 
  
  openCreateFacadePopup,
  closeCreateFacadePopup  

  } = facadePopupSlice.actions;
export default facadePopupSlice.reducer;