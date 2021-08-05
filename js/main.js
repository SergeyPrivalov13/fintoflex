window.addEventListener('DOMContentLoaded', () => { // Ждём загрузки DOM дерева 
  'use strict';

  const body = document.body;

  const progress = () => {
    const progress = document.querySelector('.gains-progress');
    const more = document.querySelector('.gains-more');
    const gains = document.querySelector('.gains');

    
    progress.addEventListener('click', () => {
      let text = progress.textContent;

      if(!more.classList.contains('active')){
        more.classList.add('active');
        progress.textContent = progress.textContent.replace('Прогресс достижений', 'Свернуть');
      } else {
        more.classList.remove('active');
        progress.textContent = progress.textContent.replace('Свернуть', 'Прогресс достижений');
      }

    })

  }
  progress();

  const addClass = () => {
    const elem = document.querySelector('.bell__container');
    body.addEventListener('click', (e) => {
      let target = e.target;

      // Появление блока оповещения
      if(target.closest('#bell')){
        elem.classList.toggle('active');
      } else {
        elem.classList.remove('active');
      }

      if(target.closest('.bell__container')){
        elem.classList.add('active')
      }

      // Меню

      if(target.closest('.cls')) {
        
      }
      
    })
  };
  addClass();

  const menu = () => {
    const btn = document.querySelector('.cls');



  };
  menu();

});