import React from 'react';

function AboutProject() {

  
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <ul className='about-project__info'>
        {/* <div className='about-project__back'></div> */}
        <li className='about-project__text'>Сервис разработан для автоматизации технических расчетов внутри разных дисциплин.</li>
        <li className='about-project__text'>Сервис разделяет информацию, доступную к редактированию по правам.</li>
        <li className='about-project__text'>Сервис способен предоставить результат расчета в привычном для проективщика виде, чтобы он мог убедиться в его правильности.</li>
        <li className='about-project__text'>Сервис нацелен на сокращение объема механической работы за счет подгрузки необходимой информации из модели объекта.</li>
      </ul>
    </section>
  );
}

export default AboutProject;
