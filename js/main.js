window.addEventListener('DOMContentLoaded', () => { // Ждём загрузки DOM дерева 
  'use strict';

  const body = document.body,
    screenWidth = window.screen.width,
    screenW = body.clientWidth,
    screenH = body.clientHeight,
    widthWindow = window.innerWidth,
    saidbar = document.querySelector('.saidbar');


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

      if (elem) {
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

      const
        btn = document.querySelector('.burger'),
        saidbar = document.querySelector('.saidbar');


      if (saidbar) {

        if (target.closest('.burger')) {
          btn.classList.toggle('cls');
          saidbar.classList.toggle('active');
          body.classList.toggle('atv');


          if (screenW <= 576) {
            body.classList.toggle('bg');
          }

        } else {
          if (target.closest('.saidbar')) {} else {
            btn.classList.remove('cls');
            saidbar.classList.remove('active');
            body.classList.remove('atv');

            if (screenW <= 576) {
              body.classList.remove('bg');
            }
          }
        }
      }

      // Закрывает select если кликнули мимо
      const selectSingle = document.querySelector('.__select');

      if (selectSingle) {
        if (!target.closest('.__select__content') && !target.closest('.__select__title')) {
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
 
  const blockHeight = () => {
    const
      blockOverflow = document.querySelector('.block-overflow');

    if (blockOverflow) {

      const
        blockTop = document.querySelector('.block-overflow').offsetTop,
        topMenuHeight = document.querySelector('.content__header').clientHeight,
        heightWindow = window.innerHeight;

      let heightBlock = heightWindow - blockTop;

      if (heightWindow < 568) {
        console.log(1);
        blockOverflow.style.cssText = `    
          height: 100%;    
      `;
      } else {

        if (widthWindow > 992) {

          blockOverflow.style.cssText = `       
            overflow-y: auto;
            height: ${heightBlock}px;  
        `;

        } else if (widthWindow <= 992 && widthWindow >= 576) {
          saidbar.style.cssText = `
            margin-top: ${topMenuHeight}px;
          `;

          blockOverflow.style.cssText = `      
            overflow-y: auto;
            height: ${heightBlock}px;  
        `;
        } else {
          saidbar.style.cssText = `
            margin-top: ${topMenuHeight}px;
          `;

          blockOverflow.style.cssText = `      
            overflow-y: auto;
            height: ${heightBlock}px;  
        `;
        }
      }
    }

  }
  blockHeight();


  const
    contract = document.querySelector('.contract');

  // Табы
  const tabs = (headerClass, containerClass, tabClass, contains, containerBox) => {
    const tabHeader = document.querySelector(headerClass),
      tabs = tabHeader.querySelectorAll(tabClass),
      heightWindow = window.innerHeight,
      tabContent = document.querySelectorAll(containerClass),
      contractTab = document.querySelectorAll(containerBox);


    const
      topMenuHeight = document.querySelector('.content__header').clientHeight,
      breadcrumb = document.querySelector('.breadcrumb').clientHeight,
      blockSubtile = document.querySelector('.block-subtile').clientHeight,
      tabHeight = document.querySelector('.contract-header').clientHeight,
      contentHeader = document.querySelector('.content__header').clientHeight;

    let hightTop = contentHeader + breadcrumb + blockSubtile + tabHeight + 40 + 14;

    let height = heightWindow - hightTop;

    if (topMenuHeight)

      if (heightWindow < 568) {
        console.log(1);
        contractTab.forEach((i) => {
          i.style.cssText = `
            height: 100%;
            overflow-y: auto;
            max-height: 100%;
            `
        })

      } else {

        if (widthWindow > 992) {

          contractTab.forEach((i) => {
            i.style.cssText = `
              height: 100%;
              overflow-y: auto;
              max-height: ${height - 106}px;
              `
          })


        } else if (widthWindow <= 992) {

          saidbar.style.cssText = `
          margin-top: ${topMenuHeight}px;
        `;

          contractTab.forEach((i) => {
            i.style.cssText = `
              height: 100%;
              overflow-y: auto;
              max-height: ${height - 36}px;
              `
          })

        }
      }



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

  if (contract) {
    tabs('.contract-header', '.contract-tab', '.contract-header__tab', 'contract-header__tab', '.contract-tab__box');
  }


  const
    setting = document.querySelector('.setting');
  const tabsTwo = () => {
    const
      topMenu = document.querySelector('.content__header').clientHeight,
      topMenuHeight = document.querySelector('.content__header').clientHeight,
      tabHeader = document.querySelector('.setting-header'),
      tabs = tabHeader.querySelectorAll('.setting-header__tab'),
      heightWindow = window.innerHeight,
      tabContent = document.querySelectorAll('.setting-tab'),
      contractTab = document.querySelectorAll('.setting-tab__box');

    let height = heightWindow;

    if (heightWindow < 568) {
      console.log(1);
      contractTab.forEach((i) => {
        i.style.cssText = `
            height: 100%;
            overflow-y: auto;
            max-height: 100%;
            `
      })

    } else {

      if (widthWindow > 992) {

        contractTab.forEach((i) => {
          i.style.cssText = `
              height: 100%;
              overflow-y: auto;
              max-height: ${height - 106}px;
              `
        })


      } else if (widthWindow <= 992) {

        saidbar.style.cssText = `
          margin-top: ${topMenuHeight}px;
        `;

        contractTab.forEach((i) => {
          i.style.cssText = `
              height: 100%;
              overflow-y: auto;
              max-height: ${height - 36}px;
              `
        })

      }
    }

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
      if (target.classList.contains('setting-header__tab')) {
        tabs.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }


    })

  };

  if (setting) {
    tabsTwo();
  }


  const financeBox = document.querySelector('.finance-box');
  const tab2 = () => {
    const tabHeader = document.querySelector('.finance-header'),
      tabs = tabHeader.querySelectorAll('.finance-header_tab'),
      tabContent = document.querySelectorAll('.finance-tab');

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
      if (target.classList.contains('finance-header_tab')) {
        tabs.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }


    })

  };

  if (financeBox) {
    tab2();
  }

  const checkbox = () => {
    const check = document.getElementById('check');
    const text = document.querySelector('.check__text');
    check.addEventListener('change', () => {
      if (check.checked) {
        text.innerHTML = 'Тёмная тема';
        body.classList.add('__white');
      } else {
        text.innerHTML = 'Светлая тема';
        body.classList.remove('__white');
      }
    })
  };
  checkbox();

  const showBlock = () => {
    const structureItem = document.querySelectorAll('.structure__item');

    structureItem.forEach((item) => {

      if(screenW >= 993) {
        item.addEventListener('mouseover', (e) => {
          let target = e.target;        
  
          if(target.closest('.structure__img')) { 
  
            if(!item.classList.contains('active')){
              structureItem.forEach((elem) => {
                elem.classList.remove('active');
              })
              item.classList.add('active');
            } else {
            }
          } else{
          }
        })
        item.addEventListener('mouseout', (e) => {
          let target = e.target;        
  
          if(target.closest('.structure__img')) { 
  
            if(!item.classList.contains('active')){
              structureItem.forEach((elem) => {
                elem.classList.remove('active');
              })
            } else {
              item.classList.remove('active');
            }
          } else{
            item.classList.remove('active');
          }
        })


      } else {
        item.addEventListener('click', (e) => {
          let target = e.target;        
  
          if(target.closest('.structure__img')) { 
  
            if(!item.classList.contains('active')){
              structureItem.forEach((elem) => {
                elem.classList.remove('active');
              })
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          } else{
            item.classList.remove('active');
          }
        })

      }

      




    })
  };

  showBlock();

});