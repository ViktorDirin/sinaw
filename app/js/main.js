$(function () {
    $('#dg-container').gallery();
});

$('.burger__btn').on('click', function () {
    $('.burger__btn').toggleClass('burger__btn--active');
    $('.header__menu-list').toggleClass('header__menu-list--active');
})