import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRoom } from "../consts/IRoom";

interface selectedRoomState {
  selectedRoom: IRoom;
}

const initialState: selectedRoomState = {
  selectedRoom: {
    id: "",
    floor: 0,
    number: "",
    name: "",
    areaRoom: 0,
    numberFacade: "",
    heatLoss: 0,
    facades: undefined
  }
};

const selectedRoomSlice = createSlice({
  name: "selectedRoom",
  initialState,
  reducers: {
    openSelectedRoom(state, action: PayloadAction<IRoom>) {
      state.selectedRoom = action.payload;
    },
    closeSelectedRoom(state) {
      state.selectedRoom = {
        id: "",
        floor: 0,
        number: "",
        name: "",
        areaRoom: 0,
        numberFacade: "",
        heatLoss: 0,
        facades: undefined
      };
    }
  }
});

export const { openSelectedRoom, closeSelectedRoom } = selectedRoomSlice.actions;
export default selectedRoomSlice.reducer;
