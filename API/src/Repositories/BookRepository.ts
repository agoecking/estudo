import { Book } from "../models/Book";

const books: Book [] = [];
let id = 0

export class BookRepository{
    register(book: Book): Book[]{
        id++;
        book._id = id;
        books.push(book);
        return books;
    }
    
    list(): Book[]{
        return books;
    }

    remove(id: number): Book[]{
        const index = books.findIndex((book) => book._id === id);
        books.splice(index, 1);
        return books;
    }

    modify(bookModified: Book): Book[]{
        const index = books.findIndex((book) => book._id === bookModified._id);
        books[index] = bookModified;
        return books;
    }
}