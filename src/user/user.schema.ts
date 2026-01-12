import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsString } from "class-validator";
import { HydratedDocument, Types } from 'mongoose';
import { isString } from "util";
import { UserSettings } from "./userSettings.schema";
import { Post } from "./post.schema";

@Schema({
    //_id: false,
    id: true
})
export class User {
    @IsString()
    @Prop({ unique: true, required: true })

    @IsString()
    username: string

    @IsString()
    @Prop({ required: false })
    displayName?: string

    @IsString()
    @Prop({ required: false })
    displayAvatar?: string

    @Prop({ type: Types.ObjectId })
    userId: User

    @Prop({ type: Types.ObjectId, ref: 'UserSettings', required: false })
    settingsId?: Types.ObjectId

    @Prop([{ type: Types.ObjectId, ref: 'Post', required: false }])
    postsIds: Post[]


}
export const UserSchema = SchemaFactory.createForClass(User)
export type UserDocument = HydratedDocument<User> 