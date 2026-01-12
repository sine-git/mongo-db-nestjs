import { Controller, Get, Param } from "@nestjs/common";
import { StudentsService } from "./students.service";

@Controller('students')
export class StudentsController {

    constructor(private studentsService: StudentsService) { }

    @Get()
    findAll() {
        return this.studentsService.findAll()
    }

    @Get('light')
    findAllLight() {
        return this.studentsService.findAllLight()
    }
    @Get('find-all-born-before-date/:date')
    findAllBornBeforeDate(@Param('date') date: Date) {
        return this.studentsService.findAllBornBeforeDate(date)
    }

    @Get('find-students-by-subject/:subject')
    findStudentsBySubject(@Param('subject') subject: string) {
        return this.studentsService.findStudentsBySubject(subject)
    }

    @Get('find-students-with-class')
    findStudentsWithClass() {
        return this.studentsService.findStudentsWithClass()
    }

    @Get('find-students-with-school')
    findStudentsWithSchool() {
        return this.studentsService.findStudentsWithSchool()
    }
    @Get('find-students-with-subjects')
    findStudentsWithSubjects() {
        return this.studentsService.findStudentsWithSubjects()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.studentsService.findOne(id)
        //.populate('classId')
    }


}