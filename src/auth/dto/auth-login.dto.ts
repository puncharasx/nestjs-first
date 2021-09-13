import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AuthLoginDto {
  @Field()
  readonly username: string;
  @Field()
  readonly password: string;
}
