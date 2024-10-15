let books = [
    { name: "Thinking", author: "Anne Bogel", price: 20, shelf: "1.1 A" },
    { name: "Kein Zufall", author: "Hakan Menguc", price: 10, shelf: "2.2 A" },
    { name: "Ögrenmeyi ögrenmek", author: "Tolstory", price: 30, shelf: "3.3 A" },
    { name: "Zafer", author: "Haluk Tatar", price: 50, shelf: "4.4 A" },
    { name: "Sonsuzluk", author: "Mark Manson", price: 40, shelf: "5.5 A" }
];

let shelfes = [
    [{ code: "1.1 A", show: false }, { code: "1.2 A", show: false }, { code: "1.3 A", show: false }, { code: "1.4 A", show: false }, { code: "1.5 A", show: false }],
    [{ code: "2.1 A", show: false }, { code: "2.2 A", show: false }, { code: "2.3 A", show: false }, { code: "2.4 A", show: false }, { code: "2.5 A", show: false }],
    [{ code: "3.1 A", show: false }, { code: "3.2 A", show: false }, { code: "3.3 A", show: false }, { code: "3.4 A", show: false }, { code: "3.5 A", show: false }],
    [{ code: "4.1 A", show: false }, { code: "4.2 A", show: false }, { code: "4.3 A", show: false }, { code: "4.4 A", show: false }, { code: "4.5 A", show: false }],
    [{ code: "5.1 A", show: false }, { code: "5.2 A", show: false }, { code: "5.3 A", show: false }, { code: "5.4 A", show: false }, { code: "5.5 A", show: false }]
];

function displayShelves() {
    console.clear();
    shelfes.forEach(row => {
        let line = row.map(shelf => shelf.show ? shelf.code : "---").join("|");
        console.log(line);
        console.log("--------------------");
    });
}

function codeSearch(bookName) {
    let book = books.find(book => book.name.toUpperCase().includes(bookName.toUpperCase()));
    return book ? book.shelf : null;
}

function showShelf(shelfCode) {
    for (let row of shelfes) {
        for (let shelf of row) {
            if (shelf.code === shelfCode) {
                shelf.show = true;
                return;
            }
        }
    }
}

displayShelves();

let bookName = prompt("Enter the book name");
let shelfCode = codeSearch(bookName);

if (shelfCode!==null) {
    showShelf(shelfCode);
    displayShelves();
} else {
    alert("Book not found");
}