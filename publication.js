function printDetails(title, author, pubDate) {
    console.log(`
        Title: ${title}
        By: ${author}
        Publish Date: ${pubDate}
        `);
}

export function create(title, author, publishOn) {
    var publicAPI = {
        print() {
            printDetails(title, author, publishOn);
        },
    };
    return publicAPI;
}
