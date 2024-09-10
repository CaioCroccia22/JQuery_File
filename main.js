$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        
        //Adicionando a imagem ao novo item
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        
        //Adicionando o overlay ao novo item
        $(`<div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
            </div>`).appendTo(novoItem);

        //Adicionando o novo item a lista       
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();

        //Limpando o campo
        $('#endereco-imagem-nova').val(' ');

        
        })
});     
