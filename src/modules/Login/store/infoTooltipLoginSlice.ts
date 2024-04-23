import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FunctionComponent } from 'react';

interface infoTooltipState {
    isInfoTooltipOpen: boolean,
    titleInfo: string,
    iconInfo: FunctionComponent<React.SVGAttributes<SVGElement>> | '',
}

const initialState: infoTooltipState = {
    isInfoTooltipOpen: false,
    titleInfo: '',
    iconInfo: '',
};

const infoTooltipLoginSlice = createSlice({
  name: 'infoTooltipLogin',
  initialState,
  reducers: {
    openInfoTooltipLogin(state, action: PayloadAction<string>) {
        state.isInfoTooltipOpen = true;
        state.titleInfo = action.payload;
    },
    closeInfoTooltipLogin(state) {
        state.isInfoTooltipOpen = false;
        state.titleInfo = '';
    }
  }
});

export const {
  openInfoTooltipLogin, 
  closeInfoTooltipLogin,

} = infoTooltipLoginSlice.actions;

export default infoTooltipLoginSlice.reducer;