const hamburger = () => {
    const menu = document.querySelector('.header__items'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__items_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__items_active');
        });
    });

};

export default hamburger;