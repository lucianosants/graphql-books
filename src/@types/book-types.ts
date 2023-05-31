export type BookDataType = {
    id: string;
    cover: string;
    title: string;
    author: string;
    genre: string;
    publication_year: string;
};

export type BooksType = {
    data: BookDataType[];
};
