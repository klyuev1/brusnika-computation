import React, { useMemo } from 'react';
// Глобальные импорты
import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks/hooks';
// Внутримодульные импорты
import Room from './Room';
import { useGetRoomsQuery } from '../api/apiRoomSlice';
import { IRoom } from '../consts/IRoom';

// Остановился здесь
// Остановился здесь
// Остановился здесь
// Остановился здесь
// Остановился здесь

function RoomTable() {
  
  const projectID = useAppSelector((state) => state.projectID);

  const { data: rooms, error } = useGetRoomsQuery({ projectID });

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  },[error])

  const floorRooms: Record<string, IRoom[]> = useMemo(() => {
    const floors: Record<string, IRoom[]> = {};
    if (rooms) {
      rooms.forEach((room: IRoom) => {
        const floor = room.floor.toString();
        if (!floors[floor]) {
          floors[floor] = [];
        }
        floors[floor].push(room);
      });
    }
    console.log(floors)
    return floors;
  }, [rooms]);
  

  return (
  <table className='table'>
        
    <thead>
      <tr className='table_header'>
        <th className='table_head room-column1'>Номер</th>
        <th className='table_head room-column2'>Наименование помещения</th>
        <th className='table_head room-column3'>Площадь</th>
        <th className='table_head room-column4'>Номер фасадного модуля</th>
        <th className='table_head room-column5'>Количество теплопотерь</th>
        <th className='table_head room-column6'></th>
      </tr>
    </thead>

    <tbody className='rooms__table-row'>
      
      {Object.keys(floorRooms).map(floor => (
        <div className='rooms__floor' key={floor}>
          {floorRooms[floor].map((room: IRoom) => (
            <Room room={room} key={room.id} />
          ))}
        </div>
      ))}

      {rooms && rooms.map(room => (

        <Room 
          room={room}
          key={room.id}
        />

      ))}
    </tbody>

  </table>
    
  );
}

export default RoomTable;