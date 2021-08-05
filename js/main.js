window.addEventListener('DOMContentLoaded', () => { // Ждём загрузки DOM дерева 
  'use strict';

  const body = document.body;
  const screenWidth = window.screen.width;

  const progress = () => {
    const progress = document.querySelector('.gains-progress');
    const more = document.querySelector('.gains-more');


    progress.addEventListener('click', () => {
      let text = progress.textContent;

      if (!more.classList.contains('active')) {
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
      const substrate = document.querySelector('.substrate');

      if (screenWidth < 992) {
        if (target.closest('#bell')) {
          elem.classList.toggle('active');
          substrate.classList.toggle('active');
          body.classList.toggle('active');
        } else {
          elem.classList.remove('active');
          substrate.classList.remove('active');
          body.classList.remove('active');
        }
  
        if (target.closest('.bell__container')) {
          elem.classList.add('active');
          substrate.classList.add('active');
          body.classList.add('active');
        }


      } else {
        if (target.closest('#bell')) {
          elem.classList.toggle('active');
        } else {
          elem.classList.remove('active');
        }

        if (target.closest('.bell__container')) {
          elem.classList.add('active')
        }
      }




      // Меню

      const btn = document.querySelector('.burger');
      const saidbar = document.querySelector('.saidbar');


      if (target.closest('.burger')) {
        btn.classList.toggle('cls');
        saidbar.classList.toggle('active');
        body.classList.toggle('atv');
        console.log(1);
      } else {
        btn.classList.remove('cls');
        saidbar.classList.remove('active');
        body.classList.remove('atv');
        console.log(2);
      }
      if (target.closest('.saidbar')) {
        btn.classList.add('cls');
        saidbar.classList.add('active');
        body.classList.add('atv');
        console.log(3);
      }




    })



  };
  addClass();

  const addMarg = () => {
    const contentHeader = document.querySelector('.content__header').clientHeight;
    const saidAct = document.querySelector('.saidbar');
    if(screenWidth < 992) {
      saidAct.style.cssText = `
        margin-top: ${contentHeader}px;
      `

    }
  }
  addMarg()

});