import { IsBoolean } from "class-validator"

export class CreateUserSettingsDto {

    @IsBoolean()
    receiveNotifications?: boolean
    @IsBoolean()
    receiveEmails?: boolean
    @IsBoolean()
    receiveSms?: boolean
}