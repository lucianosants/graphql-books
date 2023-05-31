import { BookDataType } from '../@types/book-types';
import BookCard from '../components/BookCard';

type Props = {
    books: BookDataType[];
};

export default function HomeScreen({ books }: Props) {
    return (
        <main className="flex h-screen flex-col items-center justify-start space-y-6 overflow-x-hidden bg-zinc-800 p-5">
            <header className="flex w-full items-center justify-center rounded-xl bg-zinc-700 py-3">
                <h1 className="text-2xl font-extrabold text-violet-400">
                    GRAPHQL<span className="text-violet-500 underline">books</span>
                </h1>
            </header>

            <section className="flex w-full gap-4 overflow-auto py-5">
                {books?.map((book, index) => (
                    <BookCard
                        key={`${index} - ${book.id}`}
                        id={book.id}
                        cover={book.cover}
                        title={book.title}
                        author={book.author}
                        genre={book.genre}
                        publication_year={book.publication_year}
                    />
                ))}
            </section>
        </main>
    );
}
