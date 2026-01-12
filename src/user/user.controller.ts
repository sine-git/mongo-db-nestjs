import { Controller, Get, Post, Injectable, Body, Req, Param, Patch, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUserDto";
import { UpdateUserDto } from "./dto/updateUserDto";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {

    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.userService.findById(id)
    }

    @Post()
    create(@Req() req, @Body() user: CreateUserDto) {
        return this.userService.create(user);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() user: UpdateUserDto) {
        return this.userService.update(id, user)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(id)
    }


}