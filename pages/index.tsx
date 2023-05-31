import { GetServerSideProps } from 'next';
import { client, gql } from '@/src/lib/apollo-client';

import HomeScreen from '@/src/screens/HomeScreen';
import { BooksType } from '@/src/@types/book-types';

export default function HomePage({ data }: BooksType) {
    return <HomeScreen books={data} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await client.query({
        query: gql`
            query Books {
                books {
                    cover
                    title
                    author
                    genre
                    publication_year
                }
            }
        `,
    });

    return {
        props: {
            data: data.books,
        },
    };
};
