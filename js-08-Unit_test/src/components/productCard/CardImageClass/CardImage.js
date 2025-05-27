
class CardImage {

    #description;

    constructor(imageName, description) {
        this.imageName = imageName;
        this.#description = description;
    }

    // Method to generate the full URL for the image
    getImageUrl() {
        return `${this.imageName}`;
    }

    get description() {
        return `${this.#description}`;
    }

    set description( description ) {
        this.#description = description;
    }
}

export { CardImage };