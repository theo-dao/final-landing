//Création du slider en jQuery, bibliothèque de JS, pour favoriser la compatibilité navigateur
jQuery(document).ready(function ($) {
	let slideCount = $('#slider ul li').length;
	let slideWidth = $('#slider ul li').width();
	let slideHeight = $('#slider ul li').height();
	let sliderUlWidth = slideCount * slideWidth;
	$('#slider').css({ width: slideWidth, height: slideHeight });
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('#slider ul li:last-child').prependTo('#slider ul');
    function moveLeft() {
        $('#slider ul').animate({
            opacity: 0.7
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').animate({
              opacity: 1
            }, 200);
        });
    };
    function moveRight() {
        $('#slider ul').animate({
            opacity: 0.7
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').animate({
              opacity: 1
            }, 200);
        });
    };
    $('a.control_prev').click(function () {
        moveLeft();
    });
    $('a.control_next').click(function () {
        moveRight();
    });
});


//Création de l'animation du menu (réduction opacité après scroll)
let page = document.getElementsByTagName('html')[0]
let slider = document.getElementById('slider')
let navbar = document.getElementsByClassName('navbar')[0]
window.addEventListener('scroll', () => {
    if (page.scrollTop > slider.clientHeight/2) {
        if (navbar.classList.contains('opacity')) {
            navbar.classList.remove('opacity')
        }
    } else {
        if (!navbar.classList.contains('opacity')) {
            navbar.classList.add('opacity')
        }
    }
})
