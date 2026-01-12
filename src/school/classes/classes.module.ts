import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Classes, ClassesSchema } from "./classes.schema";
import { ClassesController } from "./classes.controller";
import { ClassesService } from "./classes.service";
import { StudentsModule } from "../students/students.module";
@Module({
    imports: [
        StudentsModule,
        MongooseModule.forFeature([
            {
                name: Classes.name,
                schema: ClassesSchema
            }
        ])
    ],
    controllers: [ClassesController],
    providers: [ClassesService],
    exports: [],
})
export class ClassesModule {

}