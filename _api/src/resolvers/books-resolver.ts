import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { Book } from '../models/book-model';

import books from '@/_data/books.json';

import { CreateBookInput } from '../inputs/create-book-input';

@Resolver(() => Book)
export class BooksResolver {
    private initialData: Book[] = books;

    @Query(() => [Book])
    async books() {
        return this.initialData;
    }

    @Mutation(() => Book)
    async addBook(@Arg('data', () => CreateBookInput) { ...data }: CreateBookInput) {
        const currentBook = {
            ...data,
        };

        this.initialData.push(currentBook);

        return currentBook;
    }

    @Mutation(() => Book)
    async deleteBook(@Arg('id', () => String) id: string) {
        const bookIndex = books.findIndex((book) => book.id === id);

        if (bookIndex === -1) {
            throw new Error(`Can't find book with id: ${id}`);
        }

        const currentBook = this.initialData[bookIndex];

        this.initialData.splice(bookIndex, 1);

        return currentBook;
    }
}
