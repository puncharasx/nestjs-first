import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginUserDto {
  @Field()
  readonly username: string;
  @Field()
  readonly password: string;
}
