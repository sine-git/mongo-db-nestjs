import { PartialType } from "@nestjs/mapped-types";
import { extname } from "path";
import { User } from "../user.schema";
import { IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { UserSettings } from "../userSettings.schema";
import { CreateUserSettingsDto } from "./createUserSettingsDto";

export class CreateUserDto {

    @IsString()
    username: string

    @IsString()

    displayName?: string

    @IsString()

    displayAvatar?: string

    @IsObject()
    @IsOptional()
    @ValidateNested()
    settings?: CreateUserSettingsDto

}