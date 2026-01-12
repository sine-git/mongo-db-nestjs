import { Controller, Get, Param } from "@nestjs/common";
import { SubjectsService } from "./subjects.service";

@Controller('subjects')
export class SubjectsController {

    constructor(private subjectService: SubjectsService) {

    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.subjectService.findOne(id)
        //.populate('classId')
    }
}