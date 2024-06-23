import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import {CollectionProps} from "../consts/ICollection";
import { useDeleteCollectionMutation } from '../api/apiCollectionSlice';

function Collection({collection}: CollectionProps) {
  
  const [handleDeleteCollection] = useDeleteCollectionMutation();
  
  const parsedDate = new Date(collection.createdAt!);
  const formattedDate = format(parsedDate, 'dd.MM.yyyy');

  function onDeleteproject() {
    handleDeleteCollection(collection)
  }

  return (
        <tr className='table_row' key={collection.id}>
          <td className='table_d-collections column1-coll'>
            <p className='table__td-button-collections'>
            <div className='table__icon-collections' />{collection.name}
            </p>
            
          </td>
          <td className='table_d-collections column2-coll'>{formattedDate}</td>
          <td className='table_d-collections column3-coll'><button className='table__delete' type='button' onClick={onDeleteproject}/></td>
        </tr>
  );
}

export default Collection;