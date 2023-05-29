export default function BookCard() {
    return (
        <div className="flex min-w-max flex-col items-center justify-center gap-2 rounded-xl bg-zinc-600 p-5">
            {/* eslint-disable-next-line */}
            <img src="https://m.media-amazon.com/images/I/51VXYaKO-sL._SX346_BO1,204,203,200_.jpg" className="object-cover w-full h-48 mb-2" alt="" />



            <h2 className="text-violet-100">1984</h2>

            <p className="text-sm text-zinc-100">
                Autor - <span className="text-xs text-zinc-200">George Orwell</span>
            </p>

            <p className="text-sm text-zinc-100">
                Gênero - <span className="text-xs text-zinc-200">Distopia</span>
            </p>

            <p className="text-sm text-zinc-100">
                Publicado em - <span className="text-xs text-zinc-200">1949</span>
            </p>
        </div>
    );
}
