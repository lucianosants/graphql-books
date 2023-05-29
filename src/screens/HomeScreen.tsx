import BookCard from '../components/BookCard';

export default function HomeScreen() {
    return (
        <main className="flex h-screen flex-col items-center justify-start space-y-6 overflow-x-hidden bg-zinc-800 p-5">
            <header className="flex w-full items-center justify-center rounded-xl bg-zinc-700 py-3">
                <h1 className="text-2xl font-extrabold text-violet-400">
                    GRAPHQL<span className="text-violet-500 underline">books</span>
                </h1>
            </header>

            <section className="flex w-full gap-4 overflow-auto py-5">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </section>
        </main>
    );
}
