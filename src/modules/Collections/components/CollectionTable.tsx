import React from 'react';
import { useEffect } from 'react';
import Collection from './Collection';
import { useGetCollectionsQuery } from '../api/apiCollectionSlice';

function CollectionTable() {
  const {data: collection, error} = useGetCollectionsQuery();

  useEffect(() => {
    if (collection) {
      localStorage.setItem('collection', JSON.stringify(collection));
    }
  }, [collection]);
  
  useEffect(() => {
    if (error) {
      console.log(error)
    }
  },[error])

  return (
  <table className='table-collections'>
    <thead>
      <tr className='table_header-collections'>
        <th className='table_head-collections column1-coll'>Наименование коллекции</th>
        <th className='table_head-collections column2-coll'>Дата создания</th>
        <th className='table_head-collections column3-coll'></th>
      </tr>
    </thead>

    <tbody>
      {collection && collection.map(collection => (
        <Collection 
          collection={collection}
          key={collection.id}
        />
      ))}
    </tbody>

  </table>
    
  );
}

export default CollectionTable;