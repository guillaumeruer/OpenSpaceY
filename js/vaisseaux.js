let i = 1;
let j;


$(document).ready(function () {
  $("#b2").attr("checked", true);
  console.log(sessionStorage.getItem("compteur"));
  $("#b1v1").css("filter","invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
  $("#b3v3").css("filter","invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
  $("#b2v2").css("filter","invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
})


$(".bouton-vaisseaux-bouton").on("click", function (event) {
  boutonId = event.target.id;
  id = boutonId.replace("b", "")

  if (id == 1) {
    $("#b1v1").css("filter","invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#b2v2").css("filter","invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b3v3").css("filter","invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#s1").fadeIn();
    $("#s2").css("display", "none");
    $("#s3").css("display", "none");
  }

  if (id == 2) {
    $("#b1v1").css("filter","invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b3v3").css("filter","invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b2v2").css("filter","invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#s1").css("display", "none")
    $("#s2").fadeIn();
    $("#s3").css("display", "none")
  }

  if (id == 3) {
    $("#b1v1").css("filter","invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b2v2").css("filter","invert(20%) sepia(10%) saturate(1130%) hue-rotate(183deg) brightness(91%) contrast(92%)");
    $("#b3v3").css("filter","invert(79%) sepia(13%) saturate(2488%) hue-rotate(83deg) brightness(92%) contrast(80%)");
    $("#s1").css("display", "none")
    $("#s2").css("display", "none")
    $("#s3").fadeIn();
  };
})

$(".couleur-vaisseaux").on("click",function(event){
  couleurV = $("input[name='couleur']:checked").val();

  if (couleurV == "Bordeaux"){
      $(".slider").css("filter","invert(21%) sepia(37%) saturate(5978%) hue-rotate(345deg) brightness(98%) contrast(84%)");
  }
  if (couleurV == "Beige"){
      $(".slider").css("filter","invert(82%) sepia(4%) saturate(4335%) hue-rotate(328deg) brightness(115%) contrast(121%)");
  }
  if (couleurV == "Gris"){
      $(".slider").css("filter","invert(17%) sepia(4%) saturate(1534%) hue-rotate(147deg) brightness(91%) contrast(87%)");
  }

})

$('#submitBtn').click(function () {
  let type = $("input[name='type-vaisseau']:checked").val();
  let couleur = $("input[name='couleur']:checked").val();
  let aile = $("input[name='aile']:checked").val();
  let reacteur = $("input[name='reacteur']:checked").val();
  alert(type + couleur + aile + reacteur);

  let vaisseau = {
    "type": type,
    "couleur": couleur,
    "aile": aile,
    "reacteur": reacteur
  }

  if (sessionStorage.getItem("compteur") === null || sessionStorage.getItem("compteur") === undefined || isNaN(sessionStorage.getItem("compteur"))) {
    sessionStorage.setItem("compteur", i);
    j = 1;
  } else {
    j = parseInt(sessionStorage.getItem("compteur"));
    j += 1;
    alert(j);
    sessionStorage.setItem("compteur", j);
  }
  let id = "vaisseau" + j;
  alert(id);
  sessionStorage.setItem(id, JSON.stringify(vaisseau));
  window.location = "panier.html";
})
