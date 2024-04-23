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

const infoTooltipFacadeSlice = createSlice({
  name: 'infoTooltipFacade',
  initialState,
  reducers: {
    openInfoTooltipFacade(state, action: PayloadAction<string>) {
        state.isInfoTooltipOpen = true;
        state.titleInfo = action.payload;
    },
    closeInfoTooltipFacade(state) {
        state.isInfoTooltipOpen = false;
        state.titleInfo = '';
    },
  }
});

export const { 
  openInfoTooltipFacade,
  closeInfoTooltipFacade, 

} = infoTooltipFacadeSlice.actions;

export default infoTooltipFacadeSlice.reducer;