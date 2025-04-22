class Fruits 
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
            const newFruit = new Fruits (fruit.name,fruit.image)
            this.#tabFruits.push(newFruit)
        })
        this.#tabFruits.push(new Fruits ("orange", "orange.jpg"))

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


        
    // _afficherfruits(){
    //     // sur cette méthode je crée un tableau de nom de fruit avec le foreach qui est une boucle qui passe sur chaque élément du tableau. Pour chaque fruit j'ai mis comme propriété (nom et index)
    //      this.#noms.array.forEach((noms,index) => {
    //         const image = this.#images[index] || "Aucune image......";
    //         console.log(`${this.#noms} - ${this.#images}`)
    //      });
    //  }
    //  _creerboutons(){
    //     const bouton = document.createElement('bouton');
    //     bouton.addEventListener("click", () => {
    //         bouton.textContent = "Ajouter";
    //         bouton.style.marginLeft = '10px';
    //         this._afficherfruits();
    //     })
    //  }
     

}