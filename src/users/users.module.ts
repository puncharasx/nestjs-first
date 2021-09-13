import { Module } from '@nestjs/common';
import { UsersResolver } from './resolvers/user.resolver';
import { UsersService } from './users.service';
import { UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
