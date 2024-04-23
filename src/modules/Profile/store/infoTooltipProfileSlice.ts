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

const infoTooltipProfileSlice = createSlice({
  name: 'infoTooltipProfile',
  initialState,
  reducers: {
    openInfoTooltipProfile(state, action: PayloadAction<string>) {
        state.isInfoTooltipOpen = true;
        state.titleInfo = action.payload;
    },
    closeInfoTooltipProfile(state) {
        state.isInfoTooltipOpen = false;
        state.titleInfo = '';
    },
  }
});

export const { 
  openInfoTooltipProfile,
  closeInfoTooltipProfile

} = infoTooltipProfileSlice.actions;

export default infoTooltipProfileSlice.reducer;