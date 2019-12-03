$(document).ready(function () {
    //gestion des boutons
    $(".textb input").on("focus", function () {
        $(this).addClass("focus");
    });

    $(".textb input").on("blur", function () {
        if ($(this).val() == "") {
            $(this).removeClass("focus");
        }
    });

    // s'il n'y a pas d'objet login on n'affiche pas la déconnexion
    if (sessionStorage.getItem("login") === undefined || sessionStorage.getItem("login") === null) {
        $('.logout').css('display', 'none');
    } else {
        $(".login-form").css('display', 'none');
        $('#pseudo').text(sessionStorage.getItem("login"));
    }

    // authentification 
    $(".logbtn").click(function () {
        if ($("input[name=username]").val() == "user" && $("input[name=password]").val() == "password") {
            window.sessionStorage.setItem('login', 'user');
            window.location = "index.html";
        } else {
            $("input[name=username]").val("User ou mot de passe incorrect ! ");
            $("input[name=password]").val("");
        }
    });

    // bouton déconnection
    $(".logoutbtn").click(function () {
        sessionStorage.removeItem("login");
        window.location = "index.html";
    })


});