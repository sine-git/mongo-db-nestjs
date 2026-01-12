import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Types } from "mongoose"
import { Subjects } from "../subjects/subjects.schema"
import { Classes } from "../classes/classes.schema"
import { query } from "express"

@Schema({ collection: 'students' })
export class Students {
    @Prop()
    firstName: string
    @Prop()
    lastName: string
    @Prop({})
    birthDate: Date
    @Prop([{ type: Types.ObjectId, ref: 'Subjects' }])
    subjects: Types.ObjectId[]
    @Prop({ type: Types.ObjectId, ref: 'Classes' })
    classId: Types.ObjectId
}

export const StudentsSchema = SchemaFactory.createForClass(Students)

/* StudentsSchema.pre('deleteOne', { document: false, query: true }, async function () {
    const filter = this.getFilter()
    console.log('Deleting id ', filter._id)
}) */