import { Injectable, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserSettings, UserSettingsSchema } from "./userSettings.schema";

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: User.name,
            schema: UserSchema
        },
        {
            name: UserSettings.name,
            schema: UserSettingsSchema
        }
    ])],
    controllers: [UserController],
    providers: [UserService],
    exports: [],
})
export class UserModule {

}