let fruits = [ // Tableau contenant des objets représentant chaque fruit
    { name: "Orange", image: "orange.jpg" }, 
    { name: "Kiwi", image: "kiwi.jpg" }, 
    { name: "Banane", image: "banane.jpg" }, 
    { name: "Peche", image: "peche.jpg" }, 
    { name: "Cerise", image: "cerise.jpg" }
];

const fruitsHtml = document.querySelector("#fruits"); // Récupère l'élément HTML avec l'ID "fruits" (le conteneur des boutons)
const imageTochange = document.querySelector('#imageFruit'); // Récupère l'élément qui affiche l'image de fond
let imageSelected = "all-fruits.jpg"; // Image affichée par défaut (aucun fruit sélectionné)

fruits.forEach(fruit => { // Boucle sur chaque fruit du tableau
    const div = document.createElement('div'); // Crée une nouvelle div pour représenter un bouton de fruit
    div.classList.add("boutonFruits"); // Ajoute une classe CSS pour le style
    div.textContent = fruit.name; // Affiche le nom du fruit à l'intérieur de la div
    div.style.height = 100 / fruits.length + "vh"; // Définit la hauteur en fonction du nombre total de fruits (divise 100vh)

    div.addEventListener('mouseover', (event) => { // Quand la souris passe sur le bouton...
        imageTochange.style.backgroundImage = `url(./images/${fruit.image})`; // ...l'image de fond change vers celle du fruit survolé
    });

    div.addEventListener('mouseout', (event) => { // Quand la souris quitte le bouton...
        imageTochange.style.backgroundImage = `url(./images/${imageSelected}`; // ...on remet l'image sélectionnée (ou celle par défaut)
    });

    div.addEventListener('click', (event) => { // Quand on clique sur un fruit...
        imageSelected = fruit.image; // ...on définit ce fruit comme sélectionné
        imageTochange.style.backgroundImage = `./images/url(${imageSelected}`; //  PROBLÈME : mauvaise syntaxe, devrait être :
        // imageTochange.style.backgroundImage = `url(./images/${imageSelected})`;

        const allFruits = document.querySelectorAll(".boutonFruits"); // Sélectionne tous les boutons de fruits
        allFruits.forEach(fruitDiv => {
            fruitDiv.style.backgroundColor = ""; // Réinitialise leur fond
        });

        div.style.backgroundColor = "red"; // Met le fond en rouge pour le fruit sélectionné
    });

    fruitsHtml.appendChild(div); // Ajoute la div du fruit au conteneur principal
});
