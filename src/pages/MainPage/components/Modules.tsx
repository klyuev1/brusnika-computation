import React from 'react';

function Modules() {

  return (
    <section className='modules' id='modules'>
      <h3 className='modules__heading'>Модули</h3>
      <div className='modules__box'>
        
        <div className='modules__items'>
          <h4 className='modules__item-heading'>Брусника. Тепло</h4>
          <p className='modules__item-text'>Данный модуль автоматизирует расчет теплопотерь здания, который необходим для подбора отопительных приборов. Расчет выполняется по матрице фасадных модулей.Количество фасадных модулей, а также их характеристики редактируются администратором и берутся из текущего стандарта.</p>
        </div>
        
        <div className='modules__items'>
          <h4 className='modules__item-heading'>Брусника. Озеленение</h4>
          <p className='modules__item-text'>Данный расчет стандартизирует и автоматизирует расчет озеленения квартала для улицы и двора. Расчет выполняется для множества вариантов коллекций. Количество коллекций, а также процентное соотношение типов озеленения может быть изменено администратором.</p>
        </div>
      </div>
      
    </section>
  );
}

export default Modules;