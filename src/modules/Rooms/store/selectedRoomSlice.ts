import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRoom } from '../consts/IRoom';

interface selectedRoomState {
  selectedRoom: IRoom,
}

const initialState: selectedRoomState = {
  selectedRoom: {
    id: '',
    floor: 0,
    number: '',
    name: '',
    height: 0,
    width: 0,
    areaWall: 0,
    areaWindow: 0,
    areaRoom: 0,
    numberFacade: '',
    heatLoss: 0,
  }
};

const selectedRoomSlice = createSlice({
  name: 'selectedRoom',
  initialState,
  reducers: {
    openSelectedRoom(state, action: PayloadAction<IRoom>) {
      state.selectedRoom = action.payload;  
    },
    closeSelectedRoom(state) {
      state.selectedRoom = { 
        id: '', floor: 0, number: '', name: '', height: 0, width: 0, areaWall: 0, areaWindow: 0, areaRoom: 0, numberFacade: '', heatLoss: 0, 
      };  
    }
  }
});

export const { openSelectedRoom, closeSelectedRoom } = selectedRoomSlice.actions;
export default selectedRoomSlice.reducer;