import { Controller, Get, Param } from "@nestjs/common";
import { ClassesService } from "./classes.service";

@Controller('classes')
export class ClassesController {

    constructor(private classesService: ClassesService) {

    }


    @Get('find-students-by-classname/{:name}')
    findStudentsByClassName(@Param('name') name: string) {
        return this.classesService.findStudentsByClassName(name)
    }

    @Get('count-student-by-class')
    countStudentsByClass() {
        return this.classesService.countStudentsByClass()
    }

    @Get('count-student-by-level')
    countStudentsByLevel() {
        return this.classesService.countStudentsByLevel()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.classesService.findOne(id)
    }


}