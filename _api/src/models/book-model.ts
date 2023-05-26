import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Book {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    title: string;

    @Field(() => String)
    author: string;

    @Field(() => String)
    publication_year: string;

    @Field(() => String)
    genre: string;

    @Field(() => String)
    cover: string;
}
