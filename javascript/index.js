

$('button.togle').on('click', function () {
    console.log('test');
    $('#sidebar').toggleClass('active');
});


$(document).ready(function () {
    checkWidth();

    $(window).resize(function () {
        checkWidth();
    });

    function checkWidth() {
        var windowWidth = $(window).width();

        if (windowWidth <= 1366) {
            console.log("Tela pequena (mobile)");
            $('#sidebarCollapse .img-auto').attr('src', './src/img/icons/sidebar/sidebar_sm.svg');
            // $('.tableDesk').hide();
            // $('.tableMobile').show();



        } else {
            console.log("Tela grande (desktop)");
            $('#sidebarCollapse .img-auto').attr('src', './src/img/icons/btn-reduce.svg');
            // $('.tableDesk').show();
            // $('.tableMobile').hide();


            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');



                // if ($('#sidebar').hasClass('active')) {
                $('.iconDesactive').toggleClass('d-none');
                $('.iconActive').toggleClass('d-none');

                $('.sidebar-header div.img-logo').toggleClass('col-8');
                $('.sidebar-header div.img-logo').toggleClass('mb-3');
                $('.sidebar-header div.btn-sidebar').toggleClass('col-4');
                // }
            });
        }


        if (windowWidth <= 1024) {

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        }

        if (windowWidth <= 768) { $('img.iconDesactive').attr('src', './src/img/logo/ATLAS icone 2.svg'); }
    }
});


$(document).ready(function () {
    $('.collapse').on('show.bs.collapse', function () {
        var button = $(this).prev('.card-header').find('button');

        // Muda o valor de aria-expanded para "true"
        button.attr('aria-expanded', 'true');

        // Adiciona a classe ao título
        button.addClass('open-title');
    });

    $('.collapse').on('hide.bs.collapse', function () {
        var button = $(this).prev('.card-header').find('button');

        // Muda o valor de aria-expanded para "false"
        button.attr('aria-expanded', 'false');

        // Remove a classe do título
        button.removeClass('open-title');
    });



    if ($('.collapse').hassClass('.show')) {
        var button = $(this).prev('.card-header').find('button');
        button.addClass('open-title');
    }
});

$('.accordion .card-header').on('click', function () {
    alert()
})


$(document).ready(function () {
    // Evento click no botão
    $('.card-header button').on('click', function () {
        var isExpanded = $(this).attr('aria-expanded'); // Pega o valor atual de aria-expanded

        if (isExpanded === 'true') {
            // Se estiver expandido, mudar aria-expanded para false e remover a classe
            $(this).attr('aria-expanded', 'false');
            $(this).removeClass('open-title');
        } else {
            // Se estiver recolhido, mudar aria-expanded para true e adicionar a classe
            $(this).attr('aria-expanded', 'true');
            $(this).addClass('open-title');
        }
    });
});




