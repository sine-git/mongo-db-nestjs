import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Teachers } from "../teachers/teachers.schema";
import { Students } from "../students/students.schema";

@Schema({
    collection: 'subjects'
})
export class Subjects {
    @Prop()
    name: string
    @Prop()
    coefficient: number
}


export const SubjectsSchema = SchemaFactory.createForClass(Subjects)