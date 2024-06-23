import React from "react";
import { useChangeRoleMutation } from "../../store/api/apiProfileSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { closeChangeUserPopupOpen } from "../../modules/Rooms/store/roomPopupSlice";
import PopupWithForm from "../../components/PopupWithForm/PopupWithForm";

function ChangeRolePopup() {
  const [ChangeRole, { error, isLoading }] = useChangeRoleMutation();

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.roomPopup.isChangeUserPopupOpen);
  const handleClose = () => dispatch(closeChangeUserPopupOpen());

  const [id, setId] = React.useState<number | undefined>();
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  React.useEffect(() => {
    setId(undefined);
    setValue("");
  }, [isOpen]);

  function handleChangeId(e: React.ChangeEvent<HTMLInputElement>) {
    setId(e.target.value === "" ? undefined : +e.target.value);
  }

  function handleChangeValue(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id) {
      await ChangeRole({ userId: id, value });
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
        <h3 className="popup__input-name">ID пользователя:</h3>
        <input name="id" type="number" className="popup__input" required onChange={handleChangeId} value={id} />
      </label>

      <label className="popup__label">
        <h3 className="popup__input-name">Наименование роли:</h3>

        <select name="name" className="popup__select" required onChange={handleChangeValue} value={value}>
          <option className="popup__select-item" value="" selected disabled>
            Выберите роль
          </option>
          <option className="popup__select-item" value="admin">
            admin
          </option>
          <option className="popup__select-item" value="engineer">
            engineer
          </option>
        </select>
      </label>
    </PopupWithForm>
  );
}

export default ChangeRolePopup;
