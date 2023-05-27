import { Field, InputType } from 'type-graphql';
import { CreateBookInput } from './create-book-input';

@InputType()
export class UpdateBookInput implements Partial<CreateBookInput> {
    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => String, { nullable: true })
    author?: string;

    @Field(() => String, { nullable: true })
    publication_year?: string;

    @Field(() => String, { nullable: true })
    genre?: string;

    @Field(() => String, { nullable: true })
    cover?: string;
}
