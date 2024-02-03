'use strict'
document.addEventListener('DOMContentLoaded', () => {

   /* Открытие/закрытие модальных окон + меню */
   function modal(triggerSelector, modalSelector, closeSelector) {
        const modal = document.querySelector(modalSelector),
              trigger = document.querySelectorAll(triggerSelector),
              close = document.querySelector(closeSelector),
              body = document.querySelector('body');

        function openModal(){
            modal.classList.remove('none');
            body.style.overflow = 'hidden';

            if(modalSelector === '.menu') {
                setTimeout(() => modal.style.height = '100%', 40);
            }
        };

        function closeModal(){
            if(modalSelector === '.menu') {
                modal.style.height = '0%';
                setTimeout(() => modal.classList.add('none'), 600);
            } else {
                modal.classList.add('none');
            }

            body.style.overflow = 'unset';
        }

        trigger.forEach((item) => {
            item.addEventListener('click', () => {
                openModal();
            });
        });

        close.addEventListener('click', () => {
            closeModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
   };

   modal('.header__burger-icon', '.menu', '.menu__close');


});