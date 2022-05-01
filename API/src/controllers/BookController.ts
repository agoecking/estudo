import { Request, Response } from "express";
import { Book } from "../models/Book";
import { BookRepository } from "../Repositories/BookRepository"

const bookRepository = new BookRepository();

export class BookController {
    
    list(request: Request, response: Response){
        const books = bookRepository.list();
        response.status(200).json({message: "Listagem de livros", data: books})
    }

    register(request: Request, response: Response){
        const book: Book = request.body;
        const books = bookRepository.register(book);
        response.status(201).json({ message: "Register", data: books})
    }
}