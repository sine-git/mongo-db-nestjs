import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


@Schema({})
export class Post {
    @Prop({ required: true })
    title: string;
    @Prop({ required: true })
    contents: string;
}

export const PostSchema = SchemaFactory.createForClass(Post)
export type PostDocument = HydratedDocument<Post>