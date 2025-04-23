class collectionFruits 
{
    #noms
    #images
    #boutons
    #data = [ // Tableau contenant des objets représentant chaque fruit
        { name: "Orange", image: "orange.jpg" }, 
        { name: "Kiwi", image: "kiwi.jpg" }, 
        { name: "Banane", image: "banane.jpg" }, 
        { name: "Peche", image: "peche.jpg" }, 
        { name: "Cerise", image: "cerise.jpg" }
    ];
    #tabFruits = [];

    constructor(){
        this.#data.forEach(fruit => {
            const newFruit = new Fruit (fruit.name,fruit.image)
            this.#tabFruits.push(newFruit)
        })
        console.log(this.#tabFruits);

    }

    get noms() {
        return this.#noms;
    }

    set noms(noms){
        this.#noms = noms;
    }

    get images(){
        return this.#images;
    }

    set images(images){
        this.#images = images;
    }

    get bouton(){
        return this.#boutons;
    }

    set bouton(boutons){
        this.#boutons = boutons
    }

    get tabFruits(){
        return this.#tabFruits
    }

    set tabFruits(tabFruits){
        this.#tabFruits = tabFruits;

    }
    afficherfruits(){
        const fruitsHtml = document.querySelector("#fruits"); // Récupère l'élément HTML avec l'ID "fruits" (le conteneur des boutons)
        const imageTochange = document.querySelector('#imageFruit'); // Récupère l'élément qui affiche l'image de fond
        let imageSelected = "all-fruits.jpg"; // Image affichée par défaut (aucun fruit sélectionné)
        
        this.#tabFruits.forEach(fruit => { // Boucle sur chaque fruit du tableau
            const div = document.createElement('div'); // Crée une nouvelle div pour représenter un bouton de fruit
            div.classList.add("boutonFruits"); // Ajoute une classe CSS pour le style
            div.textContent = fruit.nom; // Affiche le nom du fruit à l'intérieur de la div
            div.style.height = 100 / this.#tabFruits.length + "vh"; // Définit la hauteur en fonction du nombre total de fruits (divise 100vh)
                const allFruits = document.querySelectorAll(".boutonFruits"); // Sélectionne tous les boutons de fruits
                allFruits.forEach(fruitDiv => {
                    fruitDiv.style.backgroundColor = ""; // Réinitialise leur fond
                });
                div.addEventListener("click", () => {
                    const allFruits = document.querySelectorAll(".boutonfruits")
                    allFruits.forEach(fruitDiv => {
                        fruitDiv.style.backgroundColor = "";
                    });
                    div.style.backgroundColor = "red"
                    const imagecontainer = document.querySelector('#imagefruit');
                    imagecontainer.innerHTML = '';
                    const img = document.querySelector("img").src;
                    img.src = fruit.image;
                    img.alt = fruit.nom;
                    imagecontainer.appendChild("img");
                })
        
                fruitsHtml.appendChild(div); // Ajoute la div du fruit au conteneur principal
                div.style.backgroundColor = "red"; // Met le fond en rouge pour le fruit sélectionné
            });
        
        
        
        
            }
        
             
        

    _creerboutons(){
        const bouton = document.createElement('button');
        bouton.addEventListener("click", () => {
            bouton.textContent = "Ajouter";
            bouton.style.marginLeft = '10px';
            this._afficherfruits();
            bouton.addEventListener('mouseover', (event) => { // Quand la souris passe sur le bouton...
                imageTochange.style.backgroundImage = `url(./images/${this.fruit.image})`; // ...l'image de fond change vers celle du fruit survolé
            });
        
            bouton.addEventListener('mouseout', (event) => { // Quand la souris quitte le bouton...
                imageTochange.style.backgroundImage = `url(./images/${this.imageSelected}`; // ...on remet l'image sélectionnée (ou celle par défaut)
            });
        
            bouton.addEventListener('click', (event) => { // Quand on clique sur un fruit...
                imageSelected = fruit.image; // ...on définit ce fruit comme sélectionné
                imageTochange.style.backgroundImage = `./images/url(${imageSelected}`; //  PROBLÈME : mauvaise syntaxe, devrait être :
                // imageTochange.style.backgroundImage = `url(./images/${imageSelected})`;
        
                const allFruits = document.querySelectorAll(".boutonFruits"); // Sélectionne tous les boutons de fruits
            
            
        });
     }     
    )}   

}