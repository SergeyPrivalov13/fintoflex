window.addEventListener('DOMContentLoaded', () => {           // Ждём загрузки DOM дерева 
  'use strict';
  
  // Плавный скролл до якоря
  const anchors = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');
  
    for (let anchor of anchors) {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
  
        const blockID = anchor.getAttribute('href').substr(1);
  
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
      });
    }
  };
  //anchors();

  

});