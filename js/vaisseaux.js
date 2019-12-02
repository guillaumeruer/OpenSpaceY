let i = 1;
let j;
let prix = 0;
let prix_type = 0;
let prix_ailes = 0;
let prix_couleur = 0;
let prix_reacteur = 0;

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

    prix_type = 30000;
    prix_couleur = 1000;
    prix_ailes = 5000;
    prix_reacteur = 15000;
    prix = prix_type + prix_couleur + prix_ailes + prix_reacteur;
    document.getElementById('prix').innerText = prix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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
        prix_type = 25000;
        break;
      case "Zetrounwar":
        $("#b2").attr("checked", true);
        $("#b2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#s2").fadeIn();
        $("#s1").css("display", "none");
        $("#s3").css("display", "none");
        prix_type = 30000;
        break;
      case "Unmetaihor":
        $("#b3").attr("checked", true);
        $("#b3v3").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#s3").fadeIn();
        $("#s2").css("display", "none");
        $("#s1").css("display", "none");
        prix_type = 35000;
        break;
    }

    switch (v.couleur) {
      case "Beige":
        $("#c1").attr("checked", true);
        $(".slider").css("filter", "invert(82%) sepia(4%) saturate(4335%) hue-rotate(328deg) brightness(115%) contrast(121%)");
        prix_couleur = 250;
        break;
      case "Bordeaux":
        $("#c2").attr("checked", true);
        $(".slider").css("filter", "invert(21%) sepia(37%) saturate(5978%) hue-rotate(345deg) brightness(98%) contrast(84%)");
        prix_couleur = 1000;
        break;
      case "Gris":
        $("#c3").attr("checked", true);
        $(".slider").css("filter", "invert(17%) sepia(4%) saturate(1534%) hue-rotate(147deg) brightness(91%) contrast(87%)");
        prix_couleur = 500;
        break;
    }

    switch (v.aile) {
      case "Shosson":
        $("#a1").attr("checked", true);
        $("#a1v1").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#aile-s1").css("display", "none");
        $("#aile-s2").css("display", "none");
        $("#aile-s1").fadeIn();
        prix_ailes = 7500;
        break;
      case "Halter":
        $("#a2").attr("checked", true);
        $("#a2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#aile-s1").css("display", "none");
        $("#aile-s3").css("display", "none");
        $("#aile-s2").fadeIn();
        prix_ailes = 5000;
        break;
      case "Papyon":
        $("#a3").attr("checked", true);
        $("#a3v3").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#aile-s1").css("display", "none");
        $("#aile-s2").css("display", "none");
        $("#aile-s3").fadeIn();
        prix_ailes = 8000;
        break;
    }

    switch (v.reacteur) {
      case "Radiohactiv":
        $("#r1").attr("checked", true);
        $("#r1v1").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#reac-s1").fadeIn();
        $("#reac-s2").css("display", "none");
        $("#reac-s3").css("display", "none");
        prix_reacteur = 10000;
        break;
      case "Tentakul":
        $("#r2").attr("checked", true);
        $("#r2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#reac-s2").fadeIn();
        $("#reac-s3").css("display", "none");
        $("#reac-s1").css("display", "none");
        prix_reacteur = 15000;
        break;
      case "Tronul":
        $("#r3").attr("checked", true);
        $("#r3v3").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
        $("#reac-s3").fadeIn();
        $("#reac-s2").css("display", "none");
        $("#reac-s1").css("display", "none");
        prix_reacteur = 5000;
        break;
    }
    prix = prix_type + prix_couleur + prix_ailes + prix_reacteur;
    document.getElementById('prix').innerText = prix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
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
    prix_type = 25000;
  }

  if (id == 2) {
    $("#b1v1").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b3v3").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#s1").css("display", "none");
    $("#s2").fadeIn();
    $("#s3").css("display", "none");
    prix_type = 30000;
  }

  if (id == 3) {
    $("#b1v1").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b2v2").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b3v3").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#s1").css("display", "none");
    $("#s2").css("display", "none");
    $("#s3").fadeIn();
    prix_type = 35000;
  }
  prix = prix_type + prix_couleur + prix_ailes + prix_reacteur;
  document.getElementById('prix').innerText = prix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

})

$(".couleur-vaisseaux").on("click", function (event) {
  couleurV = $("input[name='couleur']:checked").val();

  if (couleurV == "Bordeaux") {
    $(".slider").css("filter", "invert(21%) sepia(37%) saturate(5978%) hue-rotate(345deg) brightness(98%) contrast(84%)");
    prix_couleur = 1000;
  }
  if (couleurV == "Beige") {
    $(".slider").css("filter", "invert(82%) sepia(4%) saturate(4335%) hue-rotate(328deg) brightness(115%) contrast(121%)");
    prix_couleur = 250;
  }
  if (couleurV == "Gris") {
    $(".slider").css("filter", "invert(17%) sepia(4%) saturate(1534%) hue-rotate(147deg) brightness(91%) contrast(87%)");
    prix_couleur = 500;
  }
  prix = prix_type + prix_couleur + prix_ailes + prix_reacteur;
  document.getElementById('prix').innerText = prix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
    prix_ailes = 8000;
  }
  if (ailesV == "Halter") {
    $("#a2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#a3v3").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#a1v1").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#aile-s1").css("display", "none");
    $("#aile-s2").fadeIn();
    $("#aile-s3").css("display", "none");
    prix_ailes = 5000;
  }
  if (ailesV == "Shosson") {
    $("#a1v1").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#a2v2").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#a3v3").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#aile-s1").fadeIn();
    $("#aile-s2").css("display", "none");
    $("#aile-s3").css("display", "none");
    prix_ailes = 7500;
  }
  prix = prix_type + prix_couleur + prix_ailes + prix_reacteur;
  document.getElementById('prix').innerText = prix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
    prix_reacteur = 10000;
  }
  if (reacV == "Tentakul") {
    $("#r2v2").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#r1v1").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#r3v3").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#reac-s1").css("display", "none");
    $("#reac-s2").fadeIn();
    $("#reac-s3").css("display", "none");
    prix_reacteur = 15000;
  }
  if (reacV == "Tronul") {
    $("#r3v3").css("filter", "invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#r2v2").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#r1v1").css("filter", "invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#reac-s1").css("display", "none");
    $("#reac-s2").css("display", "none");
    $("#reac-s3").fadeIn();
    prix_reacteur = 5000;
  }

  prix = prix_type + prix_couleur + prix_ailes + prix_reacteur;
  document.getElementById('prix').innerText = prix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
    "reacteur": reacteur,
    "prix": prix
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
    sessionStorage.setItem(id, JSON.stringify(vaisseau));
    sessionStorage.removeItem('idActuel');
  }
  window.location = "panier.html";
});