import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  isCreateCollectionPopupOpen: boolean;
}

const initialState: PopupState = {
  isCreateCollectionPopupOpen: false,
};

const collectionPopupSlice = createSlice({
  name: 'CollectionPopup',
  initialState,
  reducers: {
    openCreateCollectionPopup(state) {
      state.isCreateCollectionPopupOpen = true;
    },
    closeCreateCollectionPopup(state) {
      state.isCreateCollectionPopupOpen = false;
    },
  },
});

export const { 
  
  openCreateCollectionPopup,
  closeCreateCollectionPopup  

  } = collectionPopupSlice.actions;
export default collectionPopupSlice.reducer;