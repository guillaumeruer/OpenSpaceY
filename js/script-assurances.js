class ass{
    val;
    nom;
    garanties;
    constructor(val,nom,garanties){
        this.val=val;
        this.nom=nom;
        this.garanties=garanties;
    }
}
let ass_tiers=new ass("ass_tiers","Assurance au tiers",["Responsabilité civile","Protection juridique en cas d'accident","Garantie du conducteur","Assistance"]);
let ass_intermediaire=new ass("ass_intermediaire","Assurance intermédiaire",["Responsabilité civile","Protection juridique en cas d'accident","Garantie du conducteur","Assistance","Bris de glace","Vol"]);
let ass_aventureux=new ass("ass_aventureux","Assurance Aventureux",["Responsabilité civile","Protection juridique en cas d'accident","Garantie du conducteur","Assistance","Incendie","Catastrophes"]);
let ass_frequentation=new ass("ass_frequentation","Assurance mauvaise fréquentation",["Responsabilité civile","Protection juridique en cas d'accident","Garantie du conducteur","Assistance","Vol","Vandalisme"]);
let ass_toutRisques=new ass("ass_toutRisques","Assurance tout risques",["Responsabilité civile","Protection juridique en cas d'accident","Garantie du conducteur","Assistance","Bris de glace","Vol","Incendie","Catastrophes","Vandalisme","Dommages tout accidents"]);
let ass_luxe=new ass("ass_luxe","Assurance luxe",["Responsabilité civile","Protection juridique en cas d'accident","Garantie du conducteur","Assistance","Bris de glace","Vol","Incendie","Catastrophes","Vandalisme","Dommages tout accidents","Véhicule de remplacement","Panne mécanique","Effets personnels"]);

LesAssurances=[ass_tiers,ass_intermediaire,ass_aventureux,ass_frequentation,ass_toutRisques,ass_luxe];

function getAssurance(valeur) {
    //permet de récupérer la bonne classe de l'assurance via la valeur de l'input
    let obj=LesAssurances.find(assurance => assurance.val==valeur);
    return obj;
}
function ajoutDansTableau(attr, listAssur){
    //création du tableau comparatif
    //ligne header
    let thead=$("<thead></thead>");
    let tr0=$("<tr></tr>");
    let th0=$("<th></th>").text("Garanties");
    tr0.append(th0);
    for(var elem of listAssur) {
        //nouvelle colonne header
        let th=$("<th></th>").text(elem.nom);
        tr0.append(th);
    }
    thead.append(tr0);
    $("table").append(thead);
    let tbody=$("<tbody></tbody>");
    for(var a of attr){
        //nouvelle ligne
        let tr=$("<tr></tr>");
        let td0=$("<td></td>").text(a);
        tr.append(td0);
        for(var elem of listAssur) {
            //nouvelle colonne
            //let td=$("<td></td>").text(elem.garanties.includes(a));
            let td;
            if (elem.garanties.includes(a)){
                console.log("ok");
                td=$("<td></td>").html("<i class=\"fas fa-check-circle\"></i>");
            }
            else {
                td=$("<td></td>").html("<i class=\"fas fa-times-circle\"></i>");
            }
            tr.append(td);
        }
        tbody.append(tr);
        $("table").append(tbody);
    }
}



function comparatif() {

    $(".ass").click(function(){
        $("table").html(""); //intialisation du tableau comparatif à chaque nouvelle selection
        if($(".ass").is(':checked')){ //au moins une assurance est selectionnée
            let AssurancesSelectionnees=[];
            let union=[];
            $(".ass").each(function(){

                let val=$(this).val();
                let assur=getAssurance(val);

                if($(this).is(':checked')){

                    //union des listes  de toutes les garanties des assurances selectionnées
                    let union_concat=union.concat(assur.garanties);
                    let union_set = new Set(union_concat);
                    let union_array = [];
                    for(var element of union_set) {
                        union_array.push(element);
                    }
                    union=union_array;

                    //on récupére les assurances selectionnées
                    AssurancesSelectionnees.push(assur);

                }

            });

            ajoutDansTableau(union, AssurancesSelectionnees);
        }
        else { //aucune selection d'assurances
            console.log("aucun");
        }

    });
}

