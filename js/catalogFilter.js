'use strict'
document.addEventListener('DOMContentLoaded', () => {

    /* Функция применения фильтров в Каталоге */
    /* У карточек data-filter должен быть равен id чекбокса. Если чекбокс фильтр id="stimulatori", то у карточек, подходящих под этот фильтр должен быть data-filter="stimulatori"  */
    
    function catalogFilter(){
        const filters = document.querySelectorAll('.catalog__filter-input'),
              trigger = document.querySelector('.catalog__filters-button');

        changeCards();
        trigger.addEventListener('click', () => changeCards());


        function changeCards(){
            filters.forEach(item => {
                const cards = document.querySelectorAll(`[data-filter="${item.id}"]`);
                item.checked ? showCards(cards) : closeCards(cards);
            });
        }

        function showCards(cards) {
            cards.forEach(item => item.parentNode.classList.remove('none'));
        }

        function closeCards(cards) {
            cards.forEach(item => item.parentNode.classList.add('none'));
        };
    };

    catalogFilter();
});