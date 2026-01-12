import { Module } from "@nestjs/common";
import { StudentsController } from "./students.controller";
import { StudentsService } from "./students.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Students, StudentsSchema } from "./students.schema";
import { Subjects, SubjectsSchema } from "../subjects/subjects.schema";
import { Classes, ClassesSchema } from "../classes/classes.schema";
import { SubjectsModule } from "../subjects/subjects.module";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Students.name,
                schema: StudentsSchema
            },
        ]),
        SubjectsModule
    ],
    controllers: [StudentsController],
    providers: [StudentsService],
    exports: [MongooseModule],
})
export class StudentsModule {

}