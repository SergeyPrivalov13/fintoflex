window.addEventListener('DOMContentLoaded', () => { // Ждём загрузки DOM дерева 
  'use strict';

  const body = document.body;
  const screenWidth = window.screen.width;

  const progress = () => {
    const progress = document.querySelector('.gains-progress');
    const more = document.querySelector('.gains-more');


    if (progress) {
      progress.addEventListener('click', () => {
        let text = progress.textContent;

        if (!more.classList.contains('active')) {
          more.classList.add('active');
          progress.textContent = progress.textContent.replace('Прогресс достижений', 'Свернуть');
        } else {
          more.classList.remove('active');
          progress.textContent = progress.textContent.replace('Свернуть', 'Прогресс достижений');
        }

      });
    }

  }
  progress();

  const addClass = () => {
    const elem = document.querySelector('.bell__container');
    body.addEventListener('click', (e) => {
      let target = e.target;

      // Появление блока оповещения
      const substrate = document.querySelector('.substrate');

      if(elem) {
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
      }

      // Меню

      const btn = document.querySelector('.burger');
      const saidbar = document.querySelector('.saidbar');

      if(saidbar) {
        if (target.closest('.burger')) {
          btn.classList.toggle('cls');
          saidbar.classList.toggle('active');
          body.classList.toggle('atv');
        } else {
          btn.classList.remove('cls');
          saidbar.classList.remove('active');
          body.classList.remove('atv');
        }
        if (target.closest('.saidbar')) {
          btn.classList.add('cls');
          saidbar.classList.add('active');
          body.classList.add('atv');
        }  
      }

      // Закрывает select если кликнули мимо
      const selectSingle = document.querySelector('.__select');

      if (selectSingle) {
        if (!target.closest('.__select__content') && !target.closest('.__select__title')) {
          console.log(selectSingle);
          console.log(target);
          selectSingle.setAttribute('data-state', '');
        }
      }

    })
  };
  addClass();

  const houseContent = () => {
    const houseContent = document.querySelector('.house-content');
    
    if (houseContent) {
      const contentHeader = document.querySelector('.content__header').clientHeight;
      houseContent.style.cssText = `
        height: calc( 100% - ${contentHeader}px)
      `
    }
  };
  houseContent()

  const addMarg = () => {
    const saidAct = document.querySelector('.saidbar');
    
    if(saidAct){
      const contentMain = document.querySelector('.content-main');
      const contentHeader = document.querySelector('.content__header').clientHeight;


      if (screenWidth < 992) {
        saidAct.style.cssText = `
          margin-top: ${contentHeader}px;
        `;
        contentMain.style.cssText = `
          margin-top: ${contentHeader}px;
          height: calc( 100% - ${contentHeader}px);
        `
      }
    }
  };
  addMarg()

  const select = () => {
    const selectBox = document.querySelector('.select-box');
    const selectSingle = document.querySelector('.__select');

    if (selectBox && selectSingle) {
      const selectSingle_title = selectSingle.querySelector('.__select__title');
      const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

      // Toggle menu
      selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
          selectSingle.setAttribute('data-state', '');
        } else {
          selectSingle.setAttribute('data-state', 'active');
        }
      });

      // Close when click to option
      for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
          selectSingle_title.textContent = evt.target.textContent;
          selectSingle.setAttribute('data-state', '');
          selectSingle_title.classList.add('act');
        });
      }

    }
  };
  select();

  // Расчёт высоты блока табов
  const tabHeight = () => {
    const heightWindow = window.innerHeight,
      tabBlock = document.querySelectorAll('.box-overflow');

    tabBlock.forEach((item) => {
      let tabTop = item.offsetTop;
      let blockHeight = heightWindow - tabTop;
      item.style.cssText = `
        max-height: ${blockHeight - 6}px;
      `
    })
  };
  tabHeight();


  const 
    contract = document.querySelector('.contract'),
    setting = document.querySelector('.setting');

  // Табы
  const tabs = (blockClass, headerClass, containerClass, tabClass, contains, containerBox) => {
    const tabHeader = document.querySelector(headerClass),
      tabs = tabHeader.querySelectorAll(tabClass),
      heightWindow = window.innerHeight,
      tabContent = document.querySelectorAll(containerClass),
      contractTop = document.querySelector(blockClass).offsetTop,
      contractTab = document.querySelectorAll(containerBox),
      tabHeaderTop = tabHeader.offsetHeight;

    let height = heightWindow - contractTop - tabHeaderTop - 30;

      contractTab.forEach((i) => {
        i.style.cssText = `
          height: 100%;
          overflow-y: auto;
          max-height: ${height}px;
          `
      })

      const toggleTabContent = (index) => {
        for (let i = 0; i < tabContent.length; i++) {
          if (index === i) {
            tabs[i].classList.add('active');
            tabContent[i].classList.remove('active-none');
            tabContent[i].classList.add('active');
          } else {
            tabs[i].classList.remove('active');
            tabContent[i].classList.remove('active');
            tabContent[i].classList.add('active-none');
          }
        }
      };

      tabHeader.addEventListener('click', (e) => {  

        let target = e.target;
        if (target.classList.contains(contains)) {
          tabs.forEach((item, i) => {
            if (item === target) {
              toggleTabContent(i);
            }
          });
        }


      })
    
  };

  if (contract){
    tabs('.contract', '.contract-header', '.contract-tab', '.contract-header__tab', 'contract-header__tab', '.contract-tab__box');
  }

  if (setting){
    tabs('.setting', '.setting-header', '.contract-tab', '.setting-header__tab', 'setting-header__tab', '.contract-tab__box');
  }

  

});