import React, { useEffect } from 'react';
import { useAppDispatch } from "../../store/hooks/hooks";
import { CollectionLogo } from '../../ui/icons/CollectionLogo';
import { openCreateCollectionPopup } from './store/collectionPopupSlice';
import CreateCollectionPopup from './components/CreateCollectionPopup';
// import Facade from "./components/Facade";
// import { useGetFacadesQuery } from "./api/apiFacadeSlice";
// import { openCreateFacadePopup } from "./store/facadePopupSlice";
// import CreateFacadePopup from './components/CreateFacadePopup';
// import GetFacadePopup from './components/GetFacadePopup';


function Collections() {
  // const { data: facades, error } = useGetFacadesQuery();
  const dispatch = useAppDispatch();

  const handleCreateCollectionClick = () => {
    dispatch(openCreateCollectionPopup());
    console.log(1);
  };

  // useEffect(() => {
  //   if (error) {
  //     console.log(error);
  //   }
  // }, [error]);


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
        
        <section className="elements">
        {/* {facades && facades.map((facade) => <Facade key={facade.id} facade={facade} />)} */}
        </section>
      </section>
      

      <CreateCollectionPopup />
      {/* <GetFacadePopup /> */}
    </>
  );
}

export default Collections;

