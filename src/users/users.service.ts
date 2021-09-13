import { FilterQuery, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { LoginUserDto, CreateUserDto } from './dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(filter?: FilterQuery<UserDocument>): Promise<User> {
    return this.userModel.findOne(filter).exec();
  }

  async login(loginUserDto: LoginUserDto): Promise<User | string> {
    const user = await this.findOne({ username: loginUserDto.username });
    if (!user) return 'Not fund User';
    const isPassword = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );
    if (!isPassword) return 'Password is correct.';
    return user;
  }
}
