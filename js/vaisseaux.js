let i = 1;
let j;

$(document).ready(function () {
  $("#b2").attr("checked", true);
  console.log(sessionStorage.getItem("compteur"));
})


$(".bouton-vaisseaux-bouton").on("click", function (event) {
  boutonId = event.target.id;
  id = boutonId.replace("b", "")

  if (id == 1) {

    $("#s1").fadeIn();
    $("#s2").css("display", "none");
    $("#s3").css("display", "none");
  }

  if (id == 2) {
    $("#s1").css("display", "none")
    $("#s2").fadeIn();
    $("#s3").css("display", "none")
  }

  if (id == 3) {
    $("#s1").css("display", "none")
    $("#s2").css("display", "none")
    $("#s3").fadeIn();
  };
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