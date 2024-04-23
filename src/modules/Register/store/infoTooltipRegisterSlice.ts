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

const infoTooltipRegisterSlice = createSlice({
  name: 'infoTooltipRegister',
  initialState,
  reducers: {
    openInfoTooltipRegist(state, action: PayloadAction<string>) {
        state.isInfoTooltipOpen = true;
        state.titleInfo = action.payload;
    },
    closeInfoTooltipRegist(state) {
        state.isInfoTooltipOpen = false;
        state.titleInfo = '';
    }
  }
});

export const { 
  openInfoTooltipRegist,
  closeInfoTooltipRegist,

} = infoTooltipRegisterSlice.actions;

export default infoTooltipRegisterSlice.reducer;