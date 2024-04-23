import React, { useEffect } from 'react';
// Глобальные импорты
import { useAppDispatch } from "../../store/hooks/hooks";
// Внутримодульные импорты
import { FacadeLogo } from "../../ui/icons/FacadeLogo";
import Facade from "./components/Facade";
import { useGetFacadesQuery } from "./api/apiFacadeSlice";
import { openCreateFacadePopup } from "./store/facadePopupSlice";
import CreateFacadePopup from './components/CreateFacadePopup';
import GetFacadePopup from './components/GetFacadePopup';


function Facades() {
  const { data: facades, error } = useGetFacadesQuery();
  const dispatch = useAppDispatch();

  const handleCreateFacadeClick = () => {
    dispatch(openCreateFacadePopup());
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);


  return (
    <>
      <section className="facades">
        <div className="fasades__up-container">
          <div className="fasades__title-box">
            <FacadeLogo />
            <h2 className="fasades__title">Фасады</h2>
          </div>
          <button
            className="fasades__button"
            type="button"
            onClick={handleCreateFacadeClick}
          >
            Создать фасад
          </button>
        </div>
        
        <section className="elements">
        {facades && facades.map((facade) => <Facade key={facade.id} facade={facade} />)}
        </section>
      </section>

      <CreateFacadePopup />
      <GetFacadePopup />
    </>
  );
}

export default Facades;
