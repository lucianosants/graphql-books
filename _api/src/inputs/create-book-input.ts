import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class CreateBookInput {
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
