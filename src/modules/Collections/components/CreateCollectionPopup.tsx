import React, { useEffect, useState } from 'react';
// Глобальные импорты
import PopupWithForm from '../../../components/PopupWithForm/PopupWithForm';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { closeCreateCollectionPopup } from '../store/collectionPopupSlice';
import { usePostCollectionMutation } from '../api/apiCollectionSlice';
import { Collection } from '../consts/ICollection';
// Внутримодульные импорты
// import { usePostFacadeMutation } from '../api/apiFacadeSlice';
// import { closeCreateFacadePopup } from '../store/facadePopupSlice';
// import { openInfoTooltipFacade } from '../store/infoTooltipFacadeSlice';

function CreateCollectionPopup() {
  const [isLoading, setIsLoading] = useState(false);

  const [handleCreateCollection, { error }] = usePostCollectionMutation();

  const dispatch = useAppDispatch();
  const isCreateCollectionPopupOpen = useAppSelector(state => state.collectionPopup.isCreateCollectionPopupOpen);

  // const handleOpenInfoToolTip = () => {
    // if (error) {
    //   dispatch(openInfoTooltipFacade('Что-то не так с введенными данными'))
    // }
  // }
  const handleClose = () => {
    dispatch(closeCreateCollectionPopup())
  }

  const [name, setName] = React.useState<string>('');
  console.log(name)
  const [YLawn, setYLawn] = React.useState<number>();
  const [YPerennials, setYPerennials] = React.useState<number>();
  const [YPerennialsCF, setYPerennialsCF] = React.useState<number>();
  const [YPerennialsGL, setYPerennialsGL] = React.useState<number>();
  const [YShrubsStandartD, setYShrubsStandartD] = React.useState<number>();
  const [YShrubsStandartC, setYShrubsStandartC] = React.useState<number>();
  const [YShrubsAccent, setYShrubsAccent] = React.useState<number>();
  const [YShrubsAM, setYShrubsAM] = React.useState<number>();
  const [YShrubsAH, setYShrubsAH] = React.useState<number>();
  const [YHedge, setYHedge] = React.useState<number>();
  const [YHedgeM, setYHedgeM] = React.useState<number>();
  const [YHedgeH, setYHedgeH] = React.useState<number>();
  const [YHedgeA, setYHedgeA] = React.useState<number>();
  const [YTreesStandartD, setYTreesStandartD] = React.useState<number>();
  const [YTreesSDS, setYTreesSDS] = React.useState<number>();
  const [YTreesSDM, setYTreesSDM] = React.useState<number>();
  const [YTreesStandartC, setYTreesStandartC] = React.useState<number>();
  const [YTreesAccent, setYTreesAccent] = React.useState<number>();
  const [YVines, setYVines] = React.useState<number>();
  const [YMoldedTrees, setYMoldedTrees] = React.useState<number>();
  const [YSumPercent, setYSumPercent] = React.useState<number>();

  const [SLawn, setSLawn] = React.useState<number>();
  const [SPerennials, setSPerennials] = React.useState<number>();
  const [SShrubsStandartD, setSShrubsStandartD] = React.useState<number>();
  const [SShrubsStandartC, setSShrubsStandartC] = React.useState<number>();
  const [SShrubsAccent, setSShrubsAccent] = React.useState<number>();
  const [SHedgeA, setSHedgeA] = React.useState<number>();
  const [STreesStandartD, setSTreesStandartD] = React.useState<number>();
  const [STreesSDS, setSTreesSDS] = React.useState<number>();
  const [STreesSDM, setSTreesSDM] = React.useState<number>();
  const [STreesAccent, setSTreesAccent] = React.useState<number>();
  const [STreesGiant, setSTreesGiant] = React.useState<number>();
  const [SSumPercent, setSSumPercent] = React.useState<number>();



  useEffect(() => {
    setName('');
    setYLawn(undefined);
    setYPerennials(0);
    setYPerennialsCF(0);
    setYPerennialsGL(0);
    setYShrubsStandartD(0);
    setYShrubsStandartC(0);
    setYShrubsAccent(0);
    setYShrubsAM(0);
    setYShrubsAH(0);
    setYHedge(0);
    setYHedgeM(0);
    setYHedgeH(0);
    setYHedgeA(0);
    setYTreesStandartD(0);
    setYTreesSDS(0);
    setYTreesSDM(0);
    setYTreesStandartC(0);
    setYTreesAccent(0);
    setYVines(0);
    setYMoldedTrees(0);
    setYSumPercent(0);

    setSLawn(0);
    setSPerennials(0);
    setSShrubsStandartD(0);
    setSShrubsStandartC(0);
    setSShrubsAccent(0);
    setSHedgeA(0);
    setSTreesStandartD(0);
    setSTreesSDS(0);
    setSTreesSDM(0);
    setSTreesAccent(0);
    setSTreesGiant(0);
    setSSumPercent(0);
  }, [isCreateCollectionPopupOpen]);


  // Обновление данных в формах, в которые необходимо суммирование
  useEffect(() => {
    if (YPerennialsCF === undefined && YPerennialsGL != undefined) {
      setYPerennials(Number(YPerennialsGL))
    }
    else if (YPerennialsCF != undefined && YPerennialsGL === undefined) {
      setYPerennials(Number(YPerennialsCF))
    }
    else if (YPerennialsCF != undefined && YPerennialsGL != undefined) {
      setYPerennials(Number(YPerennialsCF) + Number(YPerennialsGL))
    }
    else {
      setYPerennials(undefined)
    }

    if (YHedgeM === undefined || YHedgeH === undefined || YHedgeA === undefined) {
      setYHedge(undefined)
    }
    else {
      setYHedge(Number(YHedgeM) + Number(YHedgeH) + Number(YHedgeA))
    }

    if (YShrubsAM === undefined || YShrubsAH === undefined) {
      setYShrubsAccent(undefined)
    }
    else {
      setYShrubsAccent(Number(YShrubsAM) + Number(YShrubsAH))
    }

    if (YTreesSDS === undefined || YTreesSDM === undefined) {
      setYTreesStandartD(undefined)
    }
    else {
      setYTreesStandartD(Number(YTreesSDS) + Number(YTreesSDM))
    }
    setYSumPercent(Number(YLawn) + Number(YPerennialsCF) +
      Number(YPerennialsGL) + Number(YShrubsStandartD) + Number(YShrubsStandartC) +
      Number(YShrubsAM) + Number(YShrubsAH) + Number(YHedgeM) +
      Number(YHedgeH) + Number(YHedgeA) + Number(YTreesSDS) +
      Number(YTreesSDM) + Number(YTreesStandartC) + Number(YTreesAccent) +
      Number(YVines) + Number(YMoldedTrees))

    setSTreesStandartD(Number(STreesSDS) + Number(STreesSDM))

    setSSumPercent(Number(SLawn) + Number(SPerennials) +
      Number(SShrubsStandartD) + Number(SShrubsStandartC) + Number(SShrubsAccent) +
      Number(SHedgeA) + Number(STreesSDS) + Number(STreesSDM) +
      Number(STreesAccent) + Number(STreesGiant))
  });

  // Заполнение стейт переменных
  
  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleChangeYLawn(e: React.ChangeEvent<HTMLInputElement>) {
    setYLawn(e.target.value === '' ? undefined : +e.target.value);
  }
  function handleChangeYPerennialsCF(e: React.ChangeEvent<HTMLInputElement>) {
    setYPerennialsCF(Number(e.target.value));
  }
  function handleChangeYPerennialsGL(e: React.ChangeEvent<HTMLInputElement>) {
    setYPerennialsGL(Number(e.target.value));
  }
  function handleChangeYShrubsStandartD(e: React.ChangeEvent<HTMLInputElement>) {
    setYShrubsStandartD(Number(e.target.value));
  }
  function handleYShrubsStandartC(e: React.ChangeEvent<HTMLInputElement>) {
    setYShrubsStandartC(Number(e.target.value));
  }
  function handleChangeYShrubsAM(e: React.ChangeEvent<HTMLInputElement>) {
    setYShrubsAM(Number(e.target.value));
  }
  function handleChangeYShrubsAH(e: React.ChangeEvent<HTMLInputElement>) {
    setYShrubsAH(Number(e.target.value));
  }
  function handleChangeYHedgeM(e: React.ChangeEvent<HTMLInputElement>) {
    setYHedgeM(Number(e.target.value));
  }
  function handleChangeYHedgeH(e: React.ChangeEvent<HTMLInputElement>) {
    setYHedgeH(Number(e.target.value));
  }
  function handleChangeYHedgeA(e: React.ChangeEvent<HTMLInputElement>) {
    setYHedgeA(Number(e.target.value));
  }
  function handleChangeYTreesSDS(e: React.ChangeEvent<HTMLInputElement>) {
    setYTreesSDS(Number(e.target.value));
  }
  function handleChangeYTreesSDM(e: React.ChangeEvent<HTMLInputElement>) {
    setYTreesSDM(Number(e.target.value));
  }
  function handleChangeYTreesStandartC(e: React.ChangeEvent<HTMLInputElement>) {
    setYTreesStandartC(Number(e.target.value));
  }
  function handleChangeYTreesAccent(e: React.ChangeEvent<HTMLInputElement>) {
    setYTreesAccent(Number(e.target.value));
  }
  function handleChangeYVines(e: React.ChangeEvent<HTMLInputElement>) {
    setYVines(Number(e.target.value));
  }
  function handleChangeYMoldedTrees(e: React.ChangeEvent<HTMLInputElement>) {
    setYMoldedTrees(Number(e.target.value));
  }

  function handleChangeSLawn(e: React.ChangeEvent<HTMLInputElement>) {
    setSLawn(Number(e.target.value));
  }
  function handleChangeSPerennials(e: React.ChangeEvent<HTMLInputElement>) {
    setSPerennials(Number(e.target.value));
  }
  function handleChangeSShrubsStandartD(e: React.ChangeEvent<HTMLInputElement>) {
    setSShrubsStandartD(Number(e.target.value));
  }
  function handleChangeSShrubsStandartC(e: React.ChangeEvent<HTMLInputElement>) {
    setSShrubsStandartC(Number(e.target.value));
  }
  function handleChangeSShrubsAccent(e: React.ChangeEvent<HTMLInputElement>) {
    setSShrubsAccent(Number(e.target.value));
  }
  function handleChangeSHedgeA(e: React.ChangeEvent<HTMLInputElement>) {
    setSHedgeA(Number(e.target.value));
  }
  function handleChangeSTreesSDS(e: React.ChangeEvent<HTMLInputElement>) {
    setSTreesSDS(Number(e.target.value));
  }
  function handleChangeSTreesSDM(e: React.ChangeEvent<HTMLInputElement>) {
    setSTreesSDM(Number(e.target.value));
  }
  function handleChangeSTreesAccent(e: React.ChangeEvent<HTMLInputElement>) {
    setSTreesAccent(Number(e.target.value));
  }
  function handleChangeSTreesGiant(e: React.ChangeEvent<HTMLInputElement>) {
    setSTreesGiant(Number(e.target.value));
  }




  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const collection: Collection = {
        name: name,
        YLawn: YLawn!,
        YPerennials: YPerennials!,
        YPerennialsCF: YPerennialsCF!,
        YPerennialsGL: YPerennialsGL!,
        YShrubsStandartD: YShrubsStandartD!,
        YShrubsStandartC: YShrubsStandartC!,
        YShrubsAccent: YShrubsAccent!,
        YShrubsAM: YShrubsAM!,
        YShrubsAH: YShrubsAH!,
        YHedge: YHedge!,
        YHedgeM: YHedgeM!,
        YHedgeH: YHedgeH!,
        YHedgeA: YHedgeA!,
        YTreesStandartD: YTreesStandartD!,
        YTreesSDS: YTreesSDS!,
        YTreesSDM: YTreesSDM!,
        YTreesStandartC: YTreesStandartC!,
        YTreesAccent: YTreesAccent!,
        YVines: YVines!,
        YMoldedTrees: YMoldedTrees!,
        YSumPercent: YSumPercent!,
        SLawn: SLawn!,
        SPerennials: SPerennials!,
        SShrubsStandartD: SShrubsStandartD!,
        SShrubsStandartC: SShrubsStandartC!,
        SShrubsAccent: SShrubsAccent!,
        SHedgeA: SHedgeA!,
        STreesStandartD: STreesStandartD!,
        STreesSDS: STreesSDS!,
        STreesSDM: STreesSDM!,
        STreesAccent: STreesAccent!,
        STreesGiant: STreesGiant!,
        SSumPercent: SSumPercent!
      }
      await handleCreateCollection(collection);
      handleClose();
    } catch (e) {
      console.error('Error creating facade:', error);
      // handleOpenInfoToolTip();
    }
    setIsLoading(false);
  }

  return (
    <PopupWithForm name='create-collection'
      title='Cоздание коллекции'
      buttonName={isLoading ? 'Создание...' : 'Создать коллекцию'}
      isOpen={isCreateCollectionPopupOpen}
      isClose={handleClose}
      onSubmit={handleSubmit}
    >
      <section className='popup__sections'>
        <section className='popup__section'>
          <h2 className='popup__section-title'>Улица:</h2>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Наименование коллекции:</h3>
            <div className="popup__input-unit-block">
              <input
                name='name' type='text' className='popup__input-oneline-name' minLength={2} maxLength={40}
                value={name} required onChange={handleChangeName}
              />

            </div>
          </label>

          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Газон рулонный:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YLawn'
                type='number'
                className='popup__input-oneline'
                value={YLawn || ''}
                required
                onChange={handleChangeYLawn}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name'>Многолетники:</h3>
            <div className="popup__input-unit-block">
              <p className="popup__summary">{YPerennials}</p>
              <p className="popup__input-unit-oneline-gray">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Многолетники: злаки, цветущие:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YPerennialsCF'
                type='number'
                className='popup__input-oneline'
                value={YPerennialsCF || ''}
                required
                onChange={handleChangeYPerennialsCF}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Многолетники: почвопокровные, низкие:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YPerennialsGL'
                type='number'
                className='popup__input-oneline'
                value={YPerennialsGL || ''}
                required
                onChange={handleChangeYPerennialsGL}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Кустарники стандартные - лиственные:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YShrubsStandartD'
                type='number'
                className='popup__input-oneline'
                value={YShrubsStandartD || ''}
                required
                onChange={handleChangeYShrubsStandartD}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Кустарники стандартные - хвойные:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YShrubsStandartC'
                type='number'
                className='popup__input-oneline'
                value={YShrubsStandartC || ''}
                required
                onChange={handleYShrubsStandartC}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name'>Изгороди:</h3>
            <div className="popup__input-unit-block">
              <p className="popup__summary">{YHedge}</p>
              <p className="popup__input-unit-oneline-gray">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Изгороди: Средние:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YHedgeM'
                type='number'
                className='popup__input-oneline'
                value={YHedgeM || ''}
                required
                onChange={handleChangeYHedgeM}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Изгороди: Высокие:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YHedgeH'
                type='number'
                className='popup__input-oneline'
                value={YHedgeH || ''}
                required
                onChange={handleChangeYHedgeH}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Изгороди: Массив:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YHedgeA'
                type='number'
                className='popup__input-oneline'
                value={YHedgeA || ''}
                required
                onChange={handleChangeYHedgeA}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name'>Кустарники акцентные:</h3>
            <div className="popup__input-unit-block">
              <p className="popup__summary">{YShrubsAccent}</p>
              <p className="popup__input-unit-oneline-gray">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Кустарники акцентные: Средние:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YShrubsAM'
                type='number'
                className='popup__input-oneline'
                value={YShrubsAM || ''}
                required
                onChange={handleChangeYShrubsAM}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Кустарники акцентные: Высокие:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YShrubsAH'
                type='number'
                className='popup__input-oneline'
                value={YShrubsAH || ''}
                required
                onChange={handleChangeYShrubsAH}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name'>Деревья стандартные - лиственные:</h3>
            <div className="popup__input-unit-block">
              <p className="popup__summary">{YTreesStandartD}</p>
              <p className="popup__input-unit-oneline-gray">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Деревья стандартные: штамб 35-40:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YTreesSDS'
                type='number'
                className='popup__input-oneline'
                value={YTreesSDS || ''}
                required
                onChange={handleChangeYTreesSDS}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Деревья стандартные: мультиштамб:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YTreesSDM'
                type='number'
                className='popup__input-oneline'
                value={YTreesSDM || ''}
                required
                onChange={handleChangeYTreesSDM}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Деревья стандартные - хвойные:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YTreesStandartC'
                type='number'
                className='popup__input-oneline'
                value={YTreesStandartC || ''}
                required
                onChange={handleChangeYTreesStandartC}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Деревья акцентные:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YTreesAccent'
                type='number'
                className='popup__input-oneline'
                value={YTreesAccent || ''}
                required
                onChange={handleChangeYTreesAccent}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Лианы:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YVines'
                type='number'
                className='popup__input-oneline'
                value={YVines || ''}
                required
                onChange={handleChangeYVines}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Деревья формованные:</h3>
            <div className="popup__input-unit-block">
              <input
                name='YMoldedTrees'
                type='number'
                className='popup__input-oneline'
                value={YMoldedTrees || ''}
                required
                onChange={handleChangeYMoldedTrees}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name'>ИТОГО:</h3>
            <div className="popup__input-unit-block">
              <p className="popup__summary">{YSumPercent}</p>
              <p className="popup__input-unit-oneline-gray">%</p>
            </div>
          </label>
        </section>



        <section className='popup__section'>
          <h2 className='popup__section-title'>Двор:</h2>

          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Газон рулонный:</h3>
            <div className="popup__input-unit-block">
              <input
                name='SLawn'
                type='number'
                className='popup__input-oneline'
                value={SLawn || ''}
                required
                onChange={handleChangeSLawn}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>

          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Многолетники:</h3>
            <div className="popup__input-unit-block">
              <input
                name='SPerennials'
                type='number'
                className='popup__input-oneline'
                value={SPerennials || ''}
                required
                onChange={handleChangeSPerennials}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>

          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Кустарники стандартные - лиственные:</h3>
            <div className="popup__input-unit-block">
              <input
                name='SShrubsStandartD'
                type='number'
                className='popup__input-oneline'
                value={SShrubsStandartD || ''}
                required
                onChange={handleChangeSShrubsStandartD}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>

          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Кустарники стандартные - хвойные:</h3>
            <div className="popup__input-unit-block">
              <input
                name='SShrubsStandartC'
                type='number'
                className='popup__input-oneline'
                value={SShrubsStandartC || ''}
                required
                onChange={handleChangeSShrubsStandartC}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>

          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Кустарники акцентные:</h3>
            <div className="popup__input-unit-block">
              <input
                name='SShrubsAccent'
                type='number'
                className='popup__input-oneline'
                value={SShrubsAccent || ''}
                required
                onChange={handleChangeSShrubsAccent}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>

          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Изгороди: Массив:</h3>
            <div className="popup__input-unit-block">
              <input
                name='SHedgeA'
                type='number'
                className='popup__input-oneline'
                value={SHedgeA || ''}
                required
                onChange={handleChangeSHedgeA}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>

          <label className='popup__label-oneline'>
            <h3 className='popup__input-name'>Деревья стандартные - лиственные:</h3>
            <div className="popup__input-unit-block">
              <p className="popup__summary">{STreesStandartD}</p>
              <p className="popup__input-unit-oneline-gray">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Деревья стандартные: штамб 35-40:</h3>
            <div className="popup__input-unit-block">
              <input
                name='STreesSDS'
                type='number'
                className='popup__input-oneline'
                value={STreesSDS || ''}
                required
                onChange={handleChangeSTreesSDS}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>
          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Деревья стандартные: мультиштамб:</h3>
            <div className="popup__input-unit-block">
              <input
                name='STreesSDM'
                type='number'
                className='popup__input-oneline'
                value={STreesSDM || ''}
                required
                onChange={handleChangeSTreesSDM}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>

          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Деревья акцентные:</h3>
            <div className="popup__input-unit-block">
              <input
                name='STreesAccent'
                type='number'
                className='popup__input-oneline'
                value={STreesAccent || ''}
                required
                onChange={handleChangeSTreesAccent}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>

          <label className='popup__label-oneline'>
            <h3 className='popup__input-name-black'>Деревья второй величины:</h3>
            <div className="popup__input-unit-block">
              <input
                name='STreesGiant'
                type='number'
                className='popup__input-oneline'
                value={STreesGiant || ''}
                required
                onChange={handleChangeSTreesGiant}
              />
              <p className="popup__input-unit-oneline">%</p>
            </div>
          </label>

          <label className='popup__label-oneline'>
            <h3 className='popup__input-name'>ИТОГО:</h3>
            <div className="popup__input-unit-block">
              <p className="popup__summary">{SSumPercent}</p>
              <p className="popup__input-unit-oneline-gray">%</p>
            </div>
          </label>

        </section>

      </section>


    </PopupWithForm>
  );
}

export default CreateCollectionPopup;
