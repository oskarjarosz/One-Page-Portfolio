console.log('test');
document.addEventListener('DOMContentLoaded', function () {

//MENU
    var mobile = window.matchMedia("screen and (max-width: 340px) ")
    mobile.addListener(function (mobile) {
        if (mobile.matches) {
            console.log('Media max-width = true');
        } else {
            console.log('Media max-width = false');
        }
    });

    window.addEventListener('resize',function(){
        console.log('resize window');
    })

    var menuElem = document.querySelector('.mobile-section');
    var menuButtonElem = menuElem.querySelector('img.mobile')
    var mobile = window.matchMedia("screen and (max-width: 340px) ");

    function mobileMenu(){
        if (mobile.matches) {
            menuElem.querySelector('ul').classList.add('mobile');
            menuElem.querySelector('ul').classList.add('hide');
            menuButtonElem.classList.remove('hide');
        } else {
            menuElem.querySelector('ul').classList.remove('mobile');
            menuElem.querySelector('ul').classList.remove('hide');
            menuButtonElem.classList.add('hide');
        }
    }

    mobileMenu();

    mobile.addListener(function (mobile) {
        mobileMenu();
    });

    menuButtonElem.addEventListener('click',function(event){
        event.preventDefault();
        menuElem.querySelector('ul').classList.toggle('hide');
    })


//FORMULARZ
    var email = document.querySelector('#email');
    var name = document.querySelector('#name');
    var message = document.querySelector('#message');
    var form = document.querySelector('form');
    var errorMessageName = document.querySelector('.error-message-name');
    var errorMessageMail = document.querySelector('.error-message-mail');
    var errorMessage = document.querySelector('.error-message');


    form.addEventListener('submit', function( event ){
        if ( email.value.indexOf('@') === -1 ){
            event.preventDefault();
            errorMessageMail.innerText = 'To pole jest wymagane';
            return;
        }

        if ( name.value.length < 1 ){
            event.preventDefault();
            errorMessageName.innerText = 'To pole jest wymagane';
            return;
        }

        if ( message.value.length < 1 ){
            event.preventDefault();
            errorMessage.innerText = 'To pole jest wymagane';
            return;
        }
    });
});
