function init() {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height();
        scrollPercent = (scroll / (dh - wh)) * 100;
        $('#progressbar').css('height', scrollPercent + '%');
        $('#rocket').css('bottom', scrollPercent + '%');
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