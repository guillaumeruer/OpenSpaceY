$(document).ready(function () {
  $("#b2").attr("checked", true)
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

  sessionStorage.setItem("type-vaisseau", type);
  sessionStorage.setItem("couleur-vaisseau", couleur);
  sessionStorage.setItem("aile-vaisseau", aile);
  sessionStorage.setItem("reacteur-vaisseau", reacteur);

  window.location = "panier.html";
})