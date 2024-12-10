function Publication(title, author, publishOn) {
    var publicAPI = {
        print() {
            console.log(`
                Title: ${title}
                By: ${author}
                ${publishOn}
                `);
        },
    };
    return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(
        bookDetails.title,
        bookDetails.author,
        bookDetails.pubDate
    );

    var publicAPI = {
        print: function () {
            pub.print();
            console.log(`
                Publisher: ${bookDetails.publisher}
                ISBN: ${bookDetails.ISBN}
                `);
        },
    };
    return publicAPI;
}

var book = Book({
    title: 'You do not know JS!',
    author: 'Kyle Simpson',
    pubDate: 'June 2014',
    publisher: 'O Relly',
    ISBN: '123456-789',
});
book.print();

function BlogPost(title, author, publishDate, URL) {
    var pub = Publication(title, author, publishDate);

    var publicAPI = {
        print: function () {
            pub.print();
            console.log(`
                URL: ${URL}
                `);
        },
    };
    return publicAPI;
}

var post = BlogPost(
    'For against let',
    'Kyle Simpson',
    'June 2014',
    'https://world.mechanick'
);
post.print();
