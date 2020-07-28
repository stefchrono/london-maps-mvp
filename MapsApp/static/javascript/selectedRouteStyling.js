$(document).ready(function() {
    $('.routes_top').mouseenter(function() {
        // remove any existing 'po' classes and add the 'przed' class back
        $('.selected-route').removeClass('selected-route').addClass('routes_top');
        // for the element just hovered over, remove the 'przed' class and add 'po'
        $(this).removeClass('routes_top').addClass('selected-route');
    });
});
