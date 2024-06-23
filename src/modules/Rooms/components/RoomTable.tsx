import React, { useMemo, useState } from "react";
// Глобальные импорты
import { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks/hooks";
// Внутримодульные импорты
import Room from "./Room";
import { useGetRoomsQuery } from "../api/apiRoomSlice";
import { IRoom } from "../consts/IRoom";

// Остановился здесь
// Остановился здесь
// Остановился здесь
// Остановился здесь
// Остановился здесь

function RoomTable() {
  const projectID = useAppSelector(state => state.projectID);

  const { data: rooms, error } = useGetRoomsQuery({ projectID });

  const [expandedFloors, setExpandedFloors] = useState<string[]>([]);

  const toggleFloor = (floor: string) => {
    if (expandedFloors.includes(floor)) {
      setExpandedFloors(expandedFloors.filter(f => f !== floor));
    } else {
      setExpandedFloors([...expandedFloors, floor]);
    }
  };

  const groupRoomsByFloor = (): { [key: string]: IRoom[] } => {
    const groupedRooms: { [key: string]: IRoom[] } = {};
    if (rooms) {
      rooms.forEach(room => {
        if (!groupedRooms[room.floor]) {
          groupedRooms[room.floor] = [];
        }
        groupedRooms[room.floor].push(room);
      });
    }
    return groupedRooms;
  };
  const sortedFloors = Object.keys(groupRoomsByFloor());

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <table className="table">
      <thead>
        <tr className="table_header">
          <th className="table_head room-column1">Номер</th>
          <th className="table_head room-column2">Наименование помещения</th>
          <th className="table_head room-column3">Площадь</th>
          <th className="table_head room-column4">Номер фасадного модуля</th>
          <th className="table_head room-column5">Количество теплопотерь</th>
          <th className="table_head room-column6"></th>
        </tr>
      </thead>

      <tbody className="rooms__table-row">
        {sortedFloors.map(floor => (
          <React.Fragment key={floor}>
            <tr className="table__row">
              <td colSpan={6} className="table__td">
                {/* <button
                  className="table__floor-button"
                  onClick={() => toggleFloor(floor)}
                > */}
                <p className="table__floor">Этаж {floor}</p>
                {/* {expandedFloors.includes(floor)}
                </button> */}
              </td>
            </tr>
            {/* {expandedFloors.includes(floor) && */}
            {groupRoomsByFloor()[floor].map(room => (
              <Room room={room} key={room.id} />
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default RoomTable;
