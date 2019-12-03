$(document).ready(function () {
    let prixTot = 0;
    let j = parseInt(sessionStorage.getItem("compteur"));
    console.log(j);
    let i = 1;
    while (i <= j) {
        if (sessionStorage.getItem("vaisseau" + i) != null) {
            console.log("vaisseau" + i);
            var vaisseau = JSON.parse(sessionStorage.getItem("vaisseau" + i));
            let prod = document.createElement("div");
            prod.setAttribute('class', 'produit');
            prod.setAttribute('id', 'vaisseau' + i);
            let type = document.createElement("h3");
            type.innerText = vaisseau.type;
            prod.appendChild(type);
            let list = document.createElement("ul");
            let couleur = document.createElement("li");
            couleur.innerText = "Couleur : " + vaisseau.couleur;
            let aile = document.createElement("li");
            aile.innerText = "Ailes : " + vaisseau.aile;
            let reacteur = document.createElement("li");
            reacteur.innerText = "Réacteur : " + vaisseau.reacteur;
            list.appendChild(couleur);
            list.appendChild(aile);
            list.appendChild(reacteur);
            prod.appendChild(list);

            //création de l'aperçu du vaisseau
            let apercu = document.createElement("div");
            apercu.setAttribute('class', "apercu");
            let clickable = document.createElement('a');
            clickable.setAttribute('href', 'vaisseaux.html');
            let imgV = document.createElement("img");
            imgV.setAttribute('src', 'img/slider/vaisseaux/' + vaisseau.type + '.png');
            let imgA = document.createElement("img");
            imgA.setAttribute('src', 'img/slider/ailes/' + vaisseau.aile + '.png');
            let imgR = document.createElement("img");
            imgR.setAttribute('src', 'img/slider/reacteurs/' + vaisseau.reacteur + '.png');

            let couleurIMG = vaisseau.couleur;
            if (couleurIMG == "Bordeaux") {
                apercu.style.filter = "invert(21%) sepia(37%) saturate(5978%) hue-rotate(345deg) brightness(98%) contrast(84%)";
            }
            if (couleurIMG == "Beige") {
                apercu.style.filter = "invert(82%) sepia(4%) saturate(4335%) hue-rotate(328deg) brightness(115%) contrast(121%)";
            }
            if (couleurIMG == "Gris") {
                apercu.style.filter = "invert(17%) sepia(4%) saturate(1534%) hue-rotate(147deg) brightness(91%) contrast(87%)";
            }

            clickable.appendChild(imgV);
            clickable.appendChild(imgA);
            clickable.appendChild(imgR);
            apercu.appendChild(clickable);
            prod.appendChild(apercu);

            prixTot += vaisseau.prix;
            let prix = document.createElement('p');
            prix.innerText = "$" + vaisseau.prix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            prod.appendChild(prix);
            let btnRemove = document.createElement('i');
            btnRemove.setAttribute('class', "far fa-trash-alt");

            prod.appendChild(btnRemove);

            let hr = document.createElement("hr");
            document.querySelector(".liste-prod").appendChild(prod);
            document.querySelector(".liste-prod").appendChild(hr);
        }
        i += 1;
    }

    $(".produit .apercu").click(function () {
        let index = $(this).parent().attr('id');
        sessionStorage.setItem('idActuel', index);
    });

    $(".produit i").click(function () {
        let v = $(this).parent().attr('id');
        sessionStorage.removeItem(v);
        $(this).parent().remove();
    })

    document.getElementById("prixTotal").innerText = '$' + prixTot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

});