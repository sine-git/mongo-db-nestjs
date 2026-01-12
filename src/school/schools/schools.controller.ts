import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { SchoolsService } from "./schools.service";
import { CreateSchoolDto } from "./dto/create-school.dto";
import { UpdateSchoolDto } from './dto/update-school.dto';

@Controller('schools')
export class SchoolsController {
    constructor(
        private readonly schoolService: SchoolsService
    ) {

    }
    @Get()
    findAll() {
        return this.schoolService.findAll()
    }

    @Post()
    create(@Body() createSchoolDto: CreateSchoolDto) {
        return this.schoolService.create(createSchoolDto)
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
        return this.schoolService.update(id, updateSchoolDto)
    }

    @Delete(':id')
    deleteById(@Param('id') id: string) {
        return this.schoolService.deleteById(id)
    }
} 