let i = 1;
let j;


$(document).ready(function () {

  if (sessionStorage.getItem('idActuel') == null) {
    $("#b2").attr("checked", true);
    $("#a2").attr("checked", true);
    $("#r2").attr("checked", true);
    $("#c2").attr("checked", true);


    $("#b1v1").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b3v3").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $(".grand").css("filter", "invert(17%) sepia(4%) saturate(1534%) hue-rotate(147deg) brightness(91%) contrast(87%)");
    $(".slider").css("filter", "invert(21%) sepia(37%) saturate(5978%) hue-rotate(345deg) brightness(98%) contrast(84%)");
    $("#r2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#a2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");

  } else {
    let i = sessionStorage.getItem('idActuel');
    let v = JSON.parse(sessionStorage.getItem(i));

    switch (v.type) {
      case "Lessaturn":
        $("#b1").attr("checked", true);
        $("#b1v1").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#s1").fadeIn();
        $("#s2").css("display", "none");
        $("#s3").css("display", "none");
        break;
      case "Zetrounwar":
        $("#b2").attr("checked", true);
        $("#b2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#s2").fadeIn();
        $("#s1").css("display", "none");
        $("#s3").css("display", "none");
        break;
      case "Unmetaihor":
        $("#b3").attr("checked", true);
        $("#b3v3").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#s3").fadeIn();
        $("#s2").css("display", "none");
        $("#s1").css("display", "none");
        break;
    }

    switch (v.couleur) {
      case "Beige":
        $("#c1").attr("checked", true);
        $(".slider").css("filter", "invert(82%) sepia(4%) saturate(4335%) hue-rotate(328deg) brightness(115%) contrast(121%)");
        break;
      case "Bordeaux":
        $("#c2").attr("checked", true);
        $(".slider").css("filter", "invert(21%) sepia(37%) saturate(5978%) hue-rotate(345deg) brightness(98%) contrast(84%)");
        break;
      case "Gris":
        $("#c3").attr("checked", true);
        $(".slider").css("filter", "invert(17%) sepia(4%) saturate(1534%) hue-rotate(147deg) brightness(91%) contrast(87%)");
        break;
    }

    switch (v.aile) {
      case "Shosson":
        $("#a1").attr("checked", true);
        $("#a1v1").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#aile-s1").css("display", "none");
        $("#aile-s2").css("display", "none");
        $("#aile-s3").fadeIn();
        break;
      case "Halter":
        $("#a2").attr("checked", true);
        $("#a2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#aile-s1").css("display", "none");
        $("#aile-s3").css("display", "none");
        $("#aile-s2").fadeIn();
        break;
      case "Papyon":
        $("#a3").attr("checked", true);
        $("#a3v3").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#aile-s3").css("display", "none");
        $("#aile-s2").css("display", "none");
        $("#aile-s1").fadeIn();
        break;
    }

    switch (v.reacteur) {
      case "Radiohactiv":
        $("#r1").attr("checked", true);
        $("#r1v1").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#reac-s1").fadeIn();
        $("#reac-s2").css("display", "none");
        $("#reac-s3").css("display", "none");
        break;
      case "Tentakul":
        $("#r2").attr("checked", true);
        $("#r2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#reac-s2").fadeIn();
        $("#reac-s3").css("display", "none");
        $("#reac-s1").css("display", "none");
        break;
      case "Tronul":
        $("#r3").attr("checked", true);
        $("#r3v3").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#reac-s3").fadeIn();
        $("#reac-s2").css("display", "none");
        $("#reac-s1").css("display", "none");
        break;
    }
  }
})

$("#logo").hover(function(){
  $("#logo").css("filter","invert(88%) sepia(25%) saturate(6729%) hue-rotate(79deg) brightness(107%) contrast(116%)")
}, function(){
  $("#logo").css("filter","invert(65%) sepia(15%) saturate(6776%) hue-rotate(178deg) brightness(100%) contrast(95%)")
})

$(".bouton-vaisseaux-bouton").on("click", function (event) {
  boutonId = event.target.id;
  id = boutonId.replace("b", "")

  if (id == 1) {
    $("#b1v1").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#b2v2").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b3v3").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#s1").fadeIn();
    $("#s2").css("display", "none");
    $("#s3").css("display", "none");
  }

  if (id == 2) {
    $("#b1v1").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b3v3").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#s1").css("display", "none")
    $("#s2").fadeIn();
    $("#s3").css("display", "none")
  }

  if (id == 3) {
    $("#b1v1").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b2v2").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b3v3").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#s1").css("display", "none")
    $("#s2").css("display", "none")
    $("#s3").fadeIn();
  };
})

$(".couleur-vaisseaux").on("click", function (event) {
  couleurV = $("input[name='couleur']:checked").val();

  if (couleurV == "Bordeaux") {
    $(".slider").css("filter", "invert(21%) sepia(37%) saturate(5978%) hue-rotate(345deg) brightness(98%) contrast(84%)");
  }
  if (couleurV == "Beige") {
    $(".slider").css("filter", "invert(82%) sepia(4%) saturate(4335%) hue-rotate(328deg) brightness(115%) contrast(121%)");
  }
  if (couleurV == "Gris") {
    $(".slider").css("filter", "invert(17%) sepia(4%) saturate(1534%) hue-rotate(147deg) brightness(91%) contrast(87%)");
  }
})

$(".ailes-vaisseaux").on("click", function (event) {
  ailesV = $("input[name='aile']:checked").val();

  if (ailesV == "Papyon") {
    $("#a3v3").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#a2v2").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#a1v1").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#aile-s1").css("display", "none");
    $("#aile-s2").css("display", "none");
    $("#aile-s3").fadeIn();
  }
  if (ailesV == "Halter") {
    $("#a2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#a3v3").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#a1v1").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#aile-s1").css("display", "none");
    $("#aile-s2").fadeIn();
    $("#aile-s3").css("display", "none");
  }
  if (ailesV == "Shosson") {
    $("#a1v1").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#a2v2").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#a3v3").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#aile-s2").fadeIn();
    $("#aile-s1").css("display", "none");
    $("#aile-s3").css("display", "none");
  }
})

$(".reacteur-vaisseaux").on("click", function (event) {
  reacV = $("input[name='reacteur']:checked").val();

  if (reacV == "Radiohactiv") {
    $("#r1v1").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#r2v2").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#r3v3").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#reac-s1").fadeIn();
    $("#reac-s2").css("display", "none");
    $("#reac-s3").css("display", "none");
  }
  if (reacV == "Tentakul") {
    $("#r2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#r1v1").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#r3v3").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#reac-s1").css("display", "none");
    $("#reac-s2").fadeIn();
    $("#reac-s3").css("display", "none");
  }
  if (reacV == "Tronul") {
    $("#r3v3").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#r2v2").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#r1v1").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#reac-s1").css("display", "none");
    $("#reac-s2").css("display", "none");
    $("#reac-s3").fadeIn();
  }
})

$('#submitBtn').click(function () {
  let type = $("input[name='type-vaisseau']:checked").val();
  let couleur = $("input[name='couleur']:checked").val();
  let aile = $("input[name='aile']:checked").val();
  let reacteur = $("input[name='reacteur']:checked").val();

  let vaisseau = {
    "type": type,
    "couleur": couleur,
    "aile": aile,
    "reacteur": reacteur
  }
  if (sessionStorage.getItem('idActuel') == null) {

    if (sessionStorage.getItem("compteur") === null || sessionStorage.getItem("compteur") === undefined || isNaN(sessionStorage.getItem("compteur"))) {
      sessionStorage.setItem("compteur", i);
      j = 1;
    } else {
      j = parseInt(sessionStorage.getItem("compteur"));
      j += 1;
      sessionStorage.setItem("compteur", j);
    }
    let id = "vaisseau" + j;
    console.log(id);
    sessionStorage.setItem(id, JSON.stringify(vaisseau));

  } else {

    let id = sessionStorage.getItem('idActuel');
    sessionStorage.setItem(id, JSON.stringify(vaisseau))
    sessionStorage.removeItem('idActuel');
  }

  window.location = "panier.html";
});
