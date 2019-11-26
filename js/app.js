function init() {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height();
        scrollPercent = (scroll / (dh - wh)) * 100;
        $('#progressbar').css('height', 'calc(' + scrollPercent + '% - 84px)');
        console.log('calc(' + scrollPercent + '% - 84px)')
        if (scrollPercent - 0.84 < 8) {
            $('#rocket').css('bottom', 0);
        } else {
            $('#rocket').css('bottom', 'calc(' + scrollPercent + '% - 84px)');
        }
    })

    $('#userbutton').click(function () {
        if ($('#user').css("visibility") == "hidden") {
            $('#user').css("visibility", "visible");
        } else {
            $('#user').css("visibility", "hidden");
        }
    })

    comparatif();
}

window.onload = init;