import React, { useEffect, useState } from "react";
// Глобальные импорты
import PopupWithForm from "../../../components/PopupWithForm/PopupWithForm";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
// Внутримодульные импорты
import { usePostFacadeMutation } from "../api/apiFacadeSlice";
import { closeCreateFacadePopup } from "../store/facadePopupSlice";
import { openInfoTooltipFacade } from "../store/infoTooltipFacadeSlice";

function CreateFacadePopup() {
  const [isLoading, setIsLoading] = useState(false);
  const [resetFileInput, setResetFileInput] = useState(false);

  const [handleCreateFacade, { error }] = usePostFacadeMutation();

  const dispatch = useAppDispatch();
  const isCreateFacadePopupOpen = useAppSelector(state => state.facadePopup.isCreateFacadePopupOpen);

  const handleOpenInfoToolTip = () => {
    if (error) {
      dispatch(openInfoTooltipFacade("Что-то не так с введенными данными"));
    }
  };
  const handleClose = () => {
    dispatch(closeCreateFacadePopup());
  };

  const [name, setName] = React.useState<string>("");
  const [imageFile, setImageFile] = React.useState<File | undefined>(undefined);
  const [height, setHeight] = React.useState<number>();
  const [width, setWidth] = React.useState<number>();
  const [areaWindow, setAreaWindow] = useState<number | string>("");

  const areaWindowValue = Number(areaWindow);

  useEffect(() => {
    setName("");
    setImageFile(undefined);
    setHeight(undefined);
    setWidth(undefined);
    setAreaWindow("");
    setResetFileInput(true);
    // setAreaWall(undefined);
  }, [isCreateFacadePopupOpen]);

  useEffect(() => {
    if (resetFileInput) {
      setResetFileInput(false);
    }
  }, [resetFileInput]);

  // Заполнение стейт переменных
  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  }
  function handleChangeHeight(e: React.ChangeEvent<HTMLInputElement>) {
    setHeight(Number(e.target.value));
  }
  function handleChangeWidth(e: React.ChangeEvent<HTMLInputElement>) {
    setWidth(Number(e.target.value));
  }
  function handleChangeAreaWindow(e: React.ChangeEvent<HTMLInputElement>) {
    setAreaWindow(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    console.log({ facade: { name, height, width, areaWindow }, image: imageFile! });
    try {
      await handleCreateFacade({ facade: { name, height, width, areaWindow: areaWindowValue }, image: imageFile! });
      handleClose();
    } catch (e) {
      console.error("Error creating facade:", error);
      handleOpenInfoToolTip();
    }
    setIsLoading(false);
  }

  return (
    <PopupWithForm
      name="create-project"
      title="Cоздание фасада"
      buttonName={isLoading ? "Создание..." : "Создать фасад"}
      isOpen={isCreateFacadePopupOpen}
      isClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <h3 className="popup__input-name">Наименование фасада:</h3>
        <input
          name="author"
          type="text"
          className="popup__input"
          minLength={2}
          maxLength={40}
          value={name}
          required
          onChange={handleChangeName}
        />
      </label>

      <label className="popup__label">
        <h3 className="popup__input-name">Изображение:</h3>
        <input
          key={resetFileInput ? "reset" : "no-reset"}
          name="author"
          type="file"
          className="popup__input popup__input_file"
          required
          onChange={handleImageChange}
        />
      </label>

      <div className="popup__input-section">
        <label className="popup__label">
          <h3 className="popup__input-name">Высота фасада:</h3>
          <div className="popup__input-unit-block">
            <input
              name="height"
              type="number"
              step="10"
              className="popup__input"
              value={height || ""}
              required
              onChange={handleChangeHeight}
            />
            <p className="popup__input-unit">мм</p>
          </div>
        </label>
        <label className="popup__label">
          <h3 className="popup__input-name">Ширина фасада:</h3>
          <div className="popup__input-unit-block">
            <input
              name="width"
              type="number"
              step="10"
              className="popup__input"
              value={width || ""}
              required
              onChange={handleChangeWidth}
            />
            <p className="popup__input-unit">мм</p>
          </div>
        </label>
        <label className="popup__label">
          <h3 className="popup__input-name">Площадь окна/витража:</h3>
          <div className="popup__input-unit-block">
            <input
              name="areaWindow"
              type="number"
              className="popup__input"
              required
              // min="0"
              pattern="[0-9]"
              value={areaWindow || ""}
              onChange={handleChangeAreaWindow}
            />
            <p className="popup__input-unit">м²</p>
          </div>
        </label>
      </div>
    </PopupWithForm>
  );
}

export default CreateFacadePopup;
