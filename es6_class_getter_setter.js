class Book {
    constructor(author) {
        this._author = author;
    }

    get writer() {
        return this._author;
    }

    set writer(updateAuthor) {
        this._author = updateAuthor;
    }
}

const meme = new Book("Tashi Nyima");
console.log(meme.writer);

meme.writer = "Michael Brown";
console.log(meme.writer);