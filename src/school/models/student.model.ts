/* import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument, Types } from "mongoose"
import { Classes } from "./class.model"

@Schema({
    timestamps: true, collection: 'students',
    //strict: 'throw',
    versionKey: false
})
export class Students {
    @Prop({ required: true, unique: true })
    matricule: string
    @Prop({ required: true })
    firstName: string
    @Prop()
    lastName: string
    @Prop()
    gender: string
    @Prop({ required: true })
    age: number
    @Prop()
    status: boolean
    @Prop({
        type: Types.ObjectId,
        //required: false,
        ref: 'Classes'
    })
    //classId?: Classes
    classId?: Types.ObjectId
}

export const StudentsSchema = SchemaFactory.createForClass(Students)
export type StudentsDocument = HydratedDocument<Students> 
 */