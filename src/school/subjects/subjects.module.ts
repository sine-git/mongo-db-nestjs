import { Module } from "@nestjs/common";
import { SubjectsController } from "./subjects.controller";
import { SubjectsService } from "./subjects.service";
import { Subjects, SubjectsSchema } from "./subjects.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Subjects.name,
                schema: SubjectsSchema
            }
        ])
    ],
    controllers: [SubjectsController],
    providers: [SubjectsService],
    exports: [MongooseModule],
})

export class SubjectsModule {

}