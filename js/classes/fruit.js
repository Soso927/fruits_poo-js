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
    // cette méthode permet de créer 
    _tableaufruit() {
        let fruits = [
            { nom: "Orange", image: "orange.jpg" },
            { nom: "Kiwi", image: "kiwi.jpg" },
            { nom: "Banane", image: "banane.jpg" },
            { nom: "Peche", image: "peche.jpg" },
            { nom: "Cerise", image: "cerise.jpg" },
        ]
        

    }
}