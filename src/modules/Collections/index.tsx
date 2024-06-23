import React, { useEffect } from 'react';
import { useAppDispatch } from "../../store/hooks/hooks";
import { CollectionLogo } from '../../ui/icons/CollectionLogo';
import { openCreateCollectionPopup } from './store/collectionPopupSlice';
import CreateCollectionPopup from './components/CreateCollectionPopup';
import CollectionTable from './components/CollectionTable'

function Collections() {
  const dispatch = useAppDispatch();

  const handleCreateCollectionClick = () => {
    dispatch(openCreateCollectionPopup());
  };

  return (
    <>  
      <section className="collections">
        <div className="collections__up-container">
          <div className="collections__title-box"><CollectionLogo /><h2 className="collections__title">Коллекции</h2></div>
          <button
            className="collections__button"
            type="button"
            onClick={handleCreateCollectionClick}
          >
            Создать коллекцию
          </button>
        </div>
        <CollectionTable/>
      </section>
      

      <CreateCollectionPopup />
      {/* <GetFacadePopup /> */}
    </>
  );
}

export default Collections;

