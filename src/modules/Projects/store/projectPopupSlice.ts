import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  isCreateProjectPopupOpen: boolean;
  isUpdateProjectPopupOpen: boolean;
}

const initialState: PopupState = {
  isCreateProjectPopupOpen: false,
  isUpdateProjectPopupOpen: false
};

const projectPopupSlice = createSlice({
  name: "projectPopup",
  initialState,
  reducers: {
    openCreateProjectPopup(state) {
      state.isCreateProjectPopupOpen = true;
    },
    closeCreateProjectPopup(state) {
      state.isCreateProjectPopupOpen = false;
    },
    openUpdateProjectPopup(state) {
      state.isUpdateProjectPopupOpen = true;
    },
    closeUpdateProjectPopup(state) {
      state.isUpdateProjectPopupOpen = false;
    }
  }
});

export const {
  openCreateProjectPopup,
  closeCreateProjectPopup,

  openUpdateProjectPopup,
  closeUpdateProjectPopup
} = projectPopupSlice.actions;
export default projectPopupSlice.reducer;
