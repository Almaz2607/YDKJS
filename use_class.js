class Publication {
    constructor(title, author, pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`
            Title: ${this.title}
            By: ${this.author}
            ${this.pubDate}
            `);
    }
}

class Book extends Publication {
    constructor(bookDetails) {
        super(bookDetails.title, bookDetails.author, bookDetails.publishOn);
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }

    print() {
        super.print();
        console.log(`
            Publisher: ${this.publisher}
            ISBN: ${this.ISBN}
            `);
    }
}

var book1 = new Book({
    title: "You don't know JS!",
    author: 'Kyle Simpson',
    publishOn: 'June 2014',
    publisher: 'O Relly',
    ISBN: '123456-789',
});
book1.print();

class BlogPost extends Publication {
    constructor(title, author, publishDate, label) {
        super(title, author, publishDate);
        this.label = label;
    }

    print() {
        super.print();
        console.log(`
            label: ${this.label}
            `);
    }
}

var post = new BlogPost(
    'Yes and against let',
    'Kyle Simpson',
    'June 2014',
    'https://world.mechanick'
);
post.print();
