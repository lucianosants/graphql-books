import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { Book } from '../models/book-model';

import books from '@/_data/books.json';

import { CreateBookInput } from '../inputs/create-book-input';
import { UpdateBookInput } from '../inputs/update-book-input';

@Resolver(() => Book)
export class BooksResolver {
    private initialData: Book[] = books;

    private readonly messages = {
        noFoundId: 'Unable to find book with id',
        alreadyBookTitle: 'A book with the same title already exists',
        alreadyBookId: 'A book with ID already exists',
    };

    @Query(() => [Book])
    async books() {
        return this.initialData;
    }

    @Mutation(() => Book)
    async addBook(@Arg('data', () => CreateBookInput) { ...data }: CreateBookInput) {
        const { id, title } = data;

        const existingBookTitle = this.initialData.find((book) => book.title === title);

        const existingBookId = this.initialData.find((book) => book.id === id);

        if (existingBookTitle) {
            throw new Error(`${this.messages.alreadyBookTitle}`);
        }

        if (existingBookId) {
            throw new Error(`${this.messages.alreadyBookId}`);
        }

        const currentBook = {
            ...data,
        };

        this.initialData.push(currentBook);

        return currentBook;
    }

    @Mutation(() => Book)
    async deleteBook(@Arg('id', () => String) id: string) {
        const bookIndex = this.initialData.findIndex((book) => book.id === id);

        if (bookIndex === -1) {
            throw new Error(`${this.messages.noFoundId}: ${id}`);
        }

        const currentBook = this.initialData.splice(bookIndex, 1)[0];

        return currentBook;
    }

    @Mutation(() => Book)
    async updateBook(
        @Arg('id', () => String) id: string,
        @Arg('data', () => UpdateBookInput) { ...data }: UpdateBookInput,
    ) {
        const book = this.initialData.find((book) => book.id === id);

        if (!book) {
            throw new Error(`${this.messages.noFoundId}: ${id}`);
        }

        const currentBook = {
            ...book,
            ...data,
        };

        Object.assign(book, currentBook);

        return currentBook;
    }
}
