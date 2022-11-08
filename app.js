console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const books = [
    {
        id: 1,
        title: "Name of the Wind",
        author:"Patrick Rothfuss",
        read:true,
    },
];

class Book {
    constructor(id, title, author, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor(books) {
        this.bookCount = books.length;
        this.books = books;
    }

    addBook() {
        console.log("Addbook");
        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const read = document.getElementById("read");
        this.nextId++;
        const newBook = new Book(
            this.nextId, 
            title.value, 
            author.value, 
            read.checked);
        this.books.push(newBook);


        const tbody = document.getElementById("tableBody");
        const newTr = document.createElement("tr");
        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newRead = document.createElement("td");

        newTitle.textContent = title.value;
        newAuthor.textContent = author.value;
        const newCheckbox = document.createElement("input");
        newCheckbox.id = newBook.id;
        newCheckbox.type = "checkbox";
        newCheckbox.checked = read.checked;
        newCheckbox.disabled = read.checked;
        newCheckbox.addEventListener("click", (event) => {
            this.markRead(event.target, parseInt(event.target.id));
        });
        newRead.appendChild(newCheckbox);

        newTr.appendChild(newTitle);
        newTr.appendChild(newAuthor);
        newTr.appendChild(newRead);
        
        tbody.appendChild(newTr);
    }

    markRead(checkbox, id) {
        this.books.forEach(book => {
            if(id === book.id) {
                book.read = true;
                checkbox.disabled = true;
            }
        });
    }
}

const library = new Library(books);

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
        library.addBook();
});