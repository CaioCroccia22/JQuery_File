$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'))
    alert('Ola mundo');

    document.querySelector('header button').addEventListener('click', function(){

    })

    $('header button').click(function(){
        alert('Expandir formulario')
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        console.log('submit');
    })
});
