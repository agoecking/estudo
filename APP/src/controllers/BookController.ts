import { Request, Response} from "express";
import axios from "axios";
import { BookRepository } from "../repositories/BookRepository";

const bookRepository = new BookRepository();

export class BookController{
    
    list(request: Request, response: Response){

        let book = bookRepository.list();
        axios.get("http://localhost:3333/book/list")
        .then((response) => {
            book = response.data;
            console.log(book);
        })
        .catch((error) => {
            console.log(error);
        });

        response.status(200).json({message: "Funciona", data: book})
    }

    register(request: Request, response: Response){
        const book = request.body;
        const books = bookRepository.register(book);

        axios.post("http://localhost:3333/book/register", book)
        .then((response) =>{
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
        response.status(201).json({ message: "Produto cadastrado", data: books });

    }
}