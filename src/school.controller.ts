import { Controller, Get } from "@nestjs/common";
import { SchoolService } from "./school/school.service";

@Controller('school')
export class SchoolController {
    constructor(private readonly schoolService: SchoolService) {
    }
    @Get('students')
    getStudents() {
        return this.schoolService.findAll();
    }
}