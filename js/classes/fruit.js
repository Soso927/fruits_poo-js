class Fruit {
    #nom
    #image

    constructor(nom, image) {
        this.#nom = nom
        this.#image = image
    }

    get nom() {
        return this.#nom
    }

    set nom(nom) {
        this.#nom = nom
    }


    get image() {
        return this.#image
    }

    set image(image) {
        this.#image = image
    }
    
    // _afficherfruits(){
    //     // sur cette méthode je crée un tableau de nom de fruit avec le foreach qui est une boucle qui passe sur chaque élément du tableau. Pour chaque fruit j'ai mis comme propriété (nom et index)
    //      this.#nom.forEach((nom,index) => {
    //         const image = this.#image[index] || "Aucune image......";
    //         console.log(`${this.#nom} - ${this.#image}`)
    //      });
    //  }

    }
