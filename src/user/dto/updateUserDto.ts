import { PartialType } from "@nestjs/mapped-types";
import { extname } from "path";
import { User } from "../user.schema";
import { CreateUserSettingsDto } from "./createUserSettingsDto";
import { IsObject, IsOptional, IsString, ValidateNested } from "class-validator";

export class UpdateUserDto {

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