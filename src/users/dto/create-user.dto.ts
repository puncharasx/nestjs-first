import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  lastname: string;

  @Field(() => Int)
  age: number;
}
