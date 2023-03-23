import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserRole } from './user.role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: [] })
  roles: UserRole[];

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ required: true, default: new Date() })
  createdAt: Date;

  @Prop()
  updateAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
