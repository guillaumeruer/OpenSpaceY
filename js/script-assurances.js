class ass {
    val;
    nom;
    garanties;
    prix;
    constructor(val, nom, garanties, prix) {
        this.val = val;
        this.nom = nom;
        this.garanties = garanties;
        this.prix = prix;
    }
}
let ass_tiers = new ass("ass_tiers", "Assurance au tiers", ["Responsabilité civile", "Protection juridique en cas d'accident", "Garantie du conducteur", "Assistance"], 47.49);
let ass_intermediaire = new ass("ass_intermediaire", "Assurance intermédiaire", ["Responsabilité civile", "Protection juridique en cas d'accident", "Garantie du conducteur", "Assistance", "Bris de glace", "Vol"], 59.15);
let ass_aventureux = new ass("ass_aventureux", "Assurance Aventureux", ["Responsabilité civile", "Protection juridique en cas d'accident", "Garantie du conducteur", "Assistance", "Incendie", "Catastrophes"], 63.19);
let ass_frequentation = new ass("ass_frequentation", "Assurance mauvaises fréquentations", ["Responsabilité civile", "Protection juridique en cas d'accident", "Garantie du conducteur", "Assistance", "Vol", "Vandalisme"], 65.75);
let ass_toutRisques = new ass("ass_toutRisques", "Assurance tout risques", ["Responsabilité civile", "Protection juridique en cas d'accident", "Garantie du conducteur", "Assistance", "Bris de glace", "Vol", "Incendie", "Catastrophes", "Vandalisme", "Dommages tout accidents"], 88.53);
let ass_luxe = new ass("ass_luxe", "Assurance luxe", ["Responsabilité civile", "Protection juridique en cas d'accident", "Garantie du conducteur", "Assistance", "Bris de glace", "Vol", "Incendie", "Catastrophes", "Vandalisme", "Dommages tout accidents", "Véhicule de remplacement", "Panne mécanique", "Effets personnels"], 112.68);

LesAssurances = [ass_tiers, ass_intermediaire, ass_aventureux, ass_frequentation, ass_toutRisques, ass_luxe];

function getAssurance(valeur) {
    //permet de récupérer la bonne classe de l'assurance via la valeur de la checkbox
    let obj = LesAssurances.find(assurance => assurance.val == valeur);
    return obj;
}

function minPrix(list) {
    let min = list[0].prix;
    for (var element of list) {
        if (element.prix < min) {
            min = element.prix;
        }
    }
    return min;
}

function ajoutDansTableau(attr, listAssur) {
    //création du tableau comparatif
    //ligne header
    let thead = $("<thead></thead>");
    let tr0 = $("<tr></tr>");
    let th0 = $("<th></th>").text("Garanties");
    tr0.append(th0);
    for (var elem of listAssur) {
        //nouvelles colonnes header avec les noms des assurances
        let th = $("<th></th>").text(elem.nom);
        tr0.append(th);
    }
    thead.append(tr0);
    $("table").append(thead);
    let tbody = $("<tbody></tbody>");
    for (var a of attr) {
        //nouvelle ligne pour une garantie donnée
        let tr = $("<tr></tr>");
        let td0 = $("<td></td>").text(a);
        tr.append(td0);
        for (var elem of listAssur) {
            //pour chaque colonne (pour chaque assurance) on vérifie si la garantie est présente ou non
            let td;
            if (elem.garanties.includes(a)) { //garantie présente
                td = $("<td></td>").html("<i class=\"fas fa-check-circle\"></i>");
            } else { //garantie non présente
                td = $("<td></td>").html("<i class=\"fas fa-times-circle\"></i>");
            }
            tr.append(td);
        }
        tbody.append(tr);
    }
    //ajout du prix dans le tableau
    let trPrix = $("<tr></tr>");
    let tdPrix = $("<td></td>").text("Prix");
    trPrix.append(tdPrix);
    for (var assur of listAssur) {
        let tdP;
        tdP = $("<td></td>").html(assur.prix);

        if (assur.prix == minPrix(listAssur)) {
            tdP.css("background-color", "#00cb06");
        }
        trPrix.append(tdP);
    }
    tbody.append(trPrix);
    $("table").append(tbody);
}

function comparatif() {
    $("#comparatif > h3 ").text("Cocher les assurances à comparer pour faire apparaître le tableau comparatif");
    $(".ass").click(function () {
        $("#comparatif > h3 ").text("");
        $("table").html(""); //intialisation du tableau comparatif à chaque nouvelle selection
        if ($(".ass").is(':checked')) { //au moins une assurance est selectionnée
            let AssurancesSelectionnees = [];
            let union = [];
            $(".ass").each(function () {

                let val = $(this).val();
                let assur = getAssurance(val);

                if ($(this).is(':checked')) {

                    //union des listes  de toutes les garanties des assurances selectionnées
                    let union_concat = union.concat(assur.garanties);
                    let union_set = new Set(union_concat);
                    let union_array = [];
                    for (var element of union_set) {
                        union_array.push(element);
                    }
                    union = union_array;
                    //on récupére les assurances selectionnées
                    AssurancesSelectionnees.push(assur);
                }
            });
            ajoutDansTableau(union, AssurancesSelectionnees);
        } else { //aucune selection d'assurances
            console.log("aucun");
            $("#comparatif > h3 ").text("Cocher les assurances à comparer pour faire apparaître le tableau comparatif");
        }

    });
}

function clickInfos() {
    $("#1").click(function () {
        sessionStorage.setItem("assurance", 1);
    });
    $("#2").click(function () {
        sessionStorage.setItem("assurance", 2);
    });
    $("#3").click(function () {
        sessionStorage.setItem("assurance", 3);
    });
    $("#4").click(function () {
        sessionStorage.setItem("assurance", 4);
    });
    $("#5").click(function () {
        sessionStorage.setItem("assurance", 5);
    });
    $("#6").click(function () {
        sessionStorage.setItem("assurance", 6);
    });
}

function assurancePanier(){
    //fonction retournant l'assurance cliquée pour l'ajout au panier
    $(".button").click(function () {
        let val = $(this).val();
        let assur = getAssurance(val);
        console.log(assur);
        return assur; //retourne l'objet assurance : pour avoir le nom de l'assurance assur.nom et pour le prix assur.prix
    })

}

$(document).ready(function () {
    comparatif();
    clickInfos();
    assurancePanier();

});