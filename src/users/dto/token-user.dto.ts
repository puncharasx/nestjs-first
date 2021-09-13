import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenUserDto {
  @Field()
  readonly token?: string;
}
