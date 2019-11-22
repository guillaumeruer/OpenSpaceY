$(document).ready(function(){
  $("#b2").attr("checked",true)
})


$(".bouton-vaisseaux-bouton").on("click",function(event){
  boutonId= event.target.id;
  id= boutonId.replace("b","")

  if(id==1){

    $("#s1").fadeIn();
    $("#s2").css("display","none");
    $("#s3").css("display","none");
  }

  if(id==2){
    $("#s1").css("display","none")
    $("#s2").fadeIn();
    $("#s3").css("display","none")
  }

  if(id==3){
    $("#s1").css("display","none")
    $("#s2").css("display","none")
    $("#s3").fadeIn();
  }
;})
