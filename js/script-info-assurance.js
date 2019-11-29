

function afficherInfos(numero){
    if(numero==1){
        $("#tiers").css("display","block");
    }
    else if(numero==2){
        $("#intermediaire").css("display","block");
    }
    else if(numero==3){
        $("#aventureux").css("display","block");
    }
    else if(numero==4){
        $("#frequentations").css("display","block");
    }
    else if(numero==5){
        $("#toutRisques").css("display","block");
    }
    else if(numero==6){
        $("#luxe").css("display","block");
    }
}

$(document).ready(function() {

    let numero=sessionStorage.getItem("assurance");
    afficherInfos(numero);

});