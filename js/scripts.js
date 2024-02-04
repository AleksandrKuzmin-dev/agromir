'use strict'
document.addEventListener('DOMContentLoaded', () => {

   /* Открытие/закрытие модальных окон (в тюом числе меню и видео)*/
   function modal(triggerSelector, modalSelector, closeSelector, srcVideo = null) {
        const modal = document.querySelector(modalSelector),
              trigger = document.querySelectorAll(triggerSelector),
              close = document.querySelector(closeSelector),
              body = document.querySelector('body');

        function openModal(){
            if(srcVideo) {
                modal.children[0].src = srcVideo;
            };

            modal.classList.remove('none');
            body.style.overflow = 'hidden';

            if(modalSelector === '.menu' || srcVideo) {
                setTimeout(() => modal.style.height = '100%', 40);
            }
        };

        function closeModal(){
            if(modalSelector === '.menu' || srcVideo) {
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
   modal('[data-video="1"]', '.modal-video', '.modal-video__close', './video/main__bg.mp4');
   modal('[data-video="2"]', '.modal-video', '.modal-video__close', './video/main__bg.mp4');
});