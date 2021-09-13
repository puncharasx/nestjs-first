import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '../users.service';
import { CreateUserDto, LoginUserDto, UserDto } from '../dto';
import { AuthService } from 'src/auth/auth.service';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Query(() => [UserDto])
  async users() {
    return this.usersService.findAll();
  }

  @Query(() => UserDto)
  async user(@Args('name', { type: () => String }) name: string) {
    return this.usersService.findOne({ name: name });
  }

  @Mutation(() => UserDto)
  async createUser(@Args('input') input: CreateUserDto) {
    return this.usersService.create(input);
  }

  @Mutation(() => UserDto)
  async loginUser(@Args('input') input: LoginUserDto) {
    return this.authService.validateUser(input);
  }
}
