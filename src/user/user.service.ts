import { BadRequestException, HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { User, UserDocument } from "./user.schema";
import { CreateUserDto } from "./dto/createUserDto";
import { UpdateUserDto } from "./dto/updateUserDto";
import { UserSettings, UserSettingsDocument } from "./userSettings.schema";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>,
        @InjectModel(UserSettings.name) private readonly userSettingsModel: Model<UserSettingsDocument>) {
    }

    findAll() {
        return this.userModel.find().populate('settingsId')
    }

    findById(id: string) {

        const isValidId = Types.ObjectId.isValid(id)
        if (!isValidId)
            throw new BadRequestException('Invalid id provided !!!');
        const dbUser = this.userModel.findById(id)

        if (!dbUser)
            throw new NotFoundException('User not found !!!')
        return dbUser
    }

    async create(userDto: CreateUserDto) {

        const { settings, ...rest } = userDto
        const user = Object.assign(rest);
        if (settings) {
            const savedSettings = await this.userSettingsModel.create(settings)
            if (savedSettings)
                user.settingsId = savedSettings._id
        }

        const savedUser = await this.userModel.create(user);
        return savedUser;
    }


    async update(id: string, userDto: UpdateUserDto) {
        const { settings, ...rest } = userDto
        const user = Object.assign(rest)
        const isValidId = Types.ObjectId.isValid(id)
        if (!isValidId)
            throw new BadRequestException('Invalid id provided !!!');

        if (settings) {
            const updateSettings = await this.userSettingsModel.findByIdAndUpdate(user.settingsId, settings)
        }

        const savedUser = await this.userModel.findOneAndUpdate({ _id: id }, user);

        if (!savedUser) {
            throw new HttpException('User not found !!!', 404);
        }
        return savedUser;
    }

    async delete(id: string) {
        const isValidId = Types.ObjectId.isValid(id)
        if (!isValidId)
            throw new BadRequestException('Invalid id provided !!!');

        const deletedUser = await this.userModel.findByIdAndDelete(id)

        if (!deletedUser)
            throw new NotFoundException('User not found !!!');
    }

}