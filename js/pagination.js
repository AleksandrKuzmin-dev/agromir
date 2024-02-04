'use strict'

document.addEventListener('DOMContentLoaded', () => {

    function pagination(cardsParentSelector, bulletParentSelector, quatityElementsOfPage){
        const elementsOfPage = quatityElementsOfPage,
              cards = document.querySelectorAll(cardsParentSelector),
              quantityBullets = Math.floor(cards.length % elementsOfPage === 0 ? cards.length / elementsOfPage : cards.length / elementsOfPage + 1);

        let bullets;
            
        function createBullets(bulletParentSelector) {
            for(let i = 0; i < quantityBullets; i++){
                const bullet = document.createElement('div'),
                      bulletParent = document.querySelector(bulletParentSelector);

                bullet.classList.add('news-block__navigation-item');
                if (i === 0) bullet.classList.add('news-block__navigation-item_active');

                bullet.innerHTML = `<span class="news-block__navigation-item-value">${i + 1}</span>`;
                bulletParent.append(bullet);
                
                bullet.addEventListener('click', () => {
                    changeContent(i);
                });
            };

            bullets = document.querySelectorAll('.news-block__navigation-item');
        };

        function changeContent(orderElement){
            cards.forEach((item, index) => {
                item.style.display = 'none';
            
                if(index >= orderElement * elementsOfPage && index <= orderElement * elementsOfPage + (elementsOfPage - 1)) {
                    console.log(index, orderElement);
                    item.style.display = 'flex';
                    bullets[orderElement].classList.add('news-block__navigation-item_active');
                };
            });

            bullets.forEach((item, index) => {
                if(index != orderElement) {
                    item.classList.remove('news-block__navigation-item_active');
                };
            });
            window.location.hash="#";
            window.location.hash="news-block__card";
        };


        createBullets(bulletParentSelector);
        changeContent(0);
        window.location.hash="";
    };

    pagination('.news-block__card', '.news-block__navigation-wrapper', 2);

});