import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
// Внутримодульные импорты
import { RoomProps } from "../consts/IRoom";
import { useDeleteRoomMutation } from "../api/apiRoomSlice";
import { openSelectedRoom } from "../store/selectedRoomSlice";

function Room({ room }: RoomProps) {
  const projectID = useAppSelector(state => state.projectID);

  const dispatch = useAppDispatch();

  const [handleDeleteRoom, { error }] = useDeleteRoomMutation();

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  function onDeleteRoom() {
    handleDeleteRoom({ projectID, room });
  }

  const handleClick = () => {
    dispatch(openSelectedRoom(room));
  };

  let numbersOfFacades = "";

  if (room.facades) {
    room.facades.forEach(facade => {
      numbersOfFacades += facade.name + " ";
    });
  }

  return (
    <tr className="table_row" key={room.id}>
      <td className="table_d room-column1">{room.number}</td>
      <td className="table_d room-column2">
        <button className="table__td-button" type="button" onClick={handleClick}>
          {room.name}
        </button>
      </td>
      <td className="table_d room-column3">{room.areaRoom} м²</td>
      <td className="table_d room-column4">{numbersOfFacades}</td>
      <td className="table_d room-column5">{room.heatLoss} Вт</td>
      <td className="table_d room-column6">
        <button className="table__delete" type="button" onClick={onDeleteRoom} />
      </td>
    </tr>
  );
}

export default Room;
