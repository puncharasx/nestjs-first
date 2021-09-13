import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field()
  readonly username: string;

  @Field()
  readonly name: string;

  @Field()
  readonly lastname: string;

  @Field(() => Int)
  readonly age: number;
}
