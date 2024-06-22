import React from "react";
// Глобальные импорты
import PopupWithForm from "../../../components/PopupWithForm/PopupWithForm";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
// Внутримодульные импорты
import PopupRoomWithFacadeModule from "./PopupRoomWithFacadeModule";
// import { Room } from "../consts/IRoom";
import { useDuplicateFloorMutation } from "../api/apiRoomSlice";
import { useGetFacadesQuery } from "../../Facades/api/apiFacadeSlice";
import { closeDuplicateFloorPopup } from "../store/roomPopupSlice";

function DuplicateFloorPopup() {
  // const { data: facades } = useGetFacadesQuery();

  const projectID = useAppSelector(state => state.projectID);
  const [handleDuplicateRoom, { error, isLoading }] = useDuplicateFloorMutation();

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.roomPopup.isDuplicateFloorPopupOpen);
  const handleClose = () => dispatch(closeDuplicateFloorPopup());

  const [selectedFloor, setSelectedFloor] = React.useState<number | undefined>();
  const [createdFloor, setCreatedFloor] = React.useState<number | undefined>();

  React.useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  React.useEffect(() => {
    setSelectedFloor(undefined);
    setCreatedFloor(undefined);
  }, [isOpen]);

  function handleChangeSelectedFloor(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedFloor(e.target.value === "" ? undefined : +e.target.value);
  }

  function handleChangeCreatedFloor(e: React.ChangeEvent<HTMLInputElement>) {
    setCreatedFloor(e.target.value === "" ? undefined : +e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedFloor && createdFloor) {
      await handleDuplicateRoom({ projectID, selectedFloor, createdFloor });
      handleClose();
    }
  }

  return (
    <PopupWithForm
      name="create-project"
      title="Cоздание комнаты"
      buttonName={isLoading ? "Создание..." : "Создать комнату"}
      isOpen={isOpen}
      isClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <h3 className="popup__input-name">Копируемый этаж:</h3>
        <input
          name="selectedFloor"
          type="number"
          className="popup__input"
          required
          onChange={handleChangeSelectedFloor}
          value={selectedFloor}
        />
      </label>

      <label className="popup__label">
        <h3 className="popup__input-name">Создаваемый этаж:</h3>
        <input
          name="createdFloor"
          type="text"
          className="popup__input"
          required
          onChange={handleChangeCreatedFloor}
          value={createdFloor}
        />
      </label>
    </PopupWithForm>
  );
}

export default DuplicateFloorPopup;
