import { Query, Resolver } from 'type-graphql';

import { Book } from '../models/book-model';

import books from '@/_data/books.json';

@Resolver(() => Book)
export class BooksResolver {
    private initialData: Book[] = books;

    @Query(() => [Book])
    async books() {
        return this.initialData;
    }
}
