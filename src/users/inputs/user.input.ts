import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly name: string;

  @Field()
  readonly lastname: string;

  @Field()
  readonly age: number;
}
