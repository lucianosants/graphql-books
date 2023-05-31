import { BookDataType } from '../@types/book-types';

export default function BookCard({ cover, title, author, genre, publication_year }: BookDataType) {
    return (
        <div className="flex min-w-max flex-col items-center justify-center gap-2 rounded-xl bg-zinc-600 p-5">
            {/* eslint-disable-next-line */}
            <img src={cover} className="object-cover w-full h-48 mb-2" alt="" />

            <h2 className="text-violet-100">{title}</h2>

            <p className="text-sm text-zinc-100">
                Autor - <span className="text-xs text-zinc-200">{author}</span>
            </p>

            <p className="text-sm text-zinc-100">
                Gênero - <span className="text-xs text-zinc-200">{genre}</span>
            </p>

            <p className="text-sm text-zinc-100">
                Publicado em - <span className="text-xs text-zinc-200">{publication_year}</span>
            </p>
        </div>
    );
}
