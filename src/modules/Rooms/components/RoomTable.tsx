import React from 'react';
// Глобальные импорты
import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks/hooks';
// Внутримодульные импорты
import Room from './Room';
import { useGetRoomsQuery } from '../api/apiRoomSlice';

function RoomTable() {
  
  const projectID = useAppSelector((state) => state.projectID);

  const { data: rooms, error } = useGetRoomsQuery({ projectID });

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  },[error])

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

    <tbody>
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