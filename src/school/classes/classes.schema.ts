import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Types } from "mongoose"
import { Students, StudentsSchema } from "../students/students.schema"
import { Schools } from "../schools/schools.schema"


export enum Level { A, B, C }

@Schema()
export class Classes {
    @Prop()
    name: string
    @Prop()
    level: Level
    @Prop({ type: Types.ObjectId, ref: 'Schools' })
    schoolId: Types.ObjectId
}

export const ClassesSchema = SchemaFactory.createForClass(Classes)

/*
const studentModel = mongoose.model('students', StudentsSchema)
ClassesSchema.pre('deleteOne', { document: true }, async function () {
    console.log('Deleting id ', this._id)
    studentModel.deleteMany({ classId: this._id })

}) */