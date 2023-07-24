import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { InputType, Field, Int } from '@nestjs/graphql';

@Schema()
export class Client extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  age: number;
}


@InputType()
export class CreateClientInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field(() => Int)
  age: number;
}

@InputType()
export class UpdateClientInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field(() => Int, { nullable: true })
  age?: number;
}


export const ClientSchema = SchemaFactory.createForClass(Client);
