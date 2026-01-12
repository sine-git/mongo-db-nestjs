import { Module } from "@nestjs/common";
import { SchoolController } from "src/school.controller";
import { SchoolService } from "../school.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Schools, SchoolsSchema } from "./schools.schema";
import { TeachersSchema } from "../teachers/teachers.schema";
import { SchoolsController } from "./schools.controller";
import { SchoolsService } from "./schools.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Schools.name,
                schema: SchoolsSchema
            }
        ])
    ],
    controllers: [SchoolsController],
    providers: [SchoolsService],
    exports: [],
})
export class SchoolsModule {

}
