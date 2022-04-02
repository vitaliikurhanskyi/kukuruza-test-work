document.addEventListener("DOMContentLoaded", function(event) {

    var menu = document.getElementById('modal-menu-position');
    var menuBtn = document.getElementById('menu-btn');
    var closeMenu = document.getElementById('close-menu');

    menuBtn.onclick = function(e){

        e.preventDefault();

        menu.classList.add('toogle-menu');

    }

    closeMenu.onclick = function(e){

        e.preventDefault();

        menu.classList.remove('toogle-menu');

    }

});