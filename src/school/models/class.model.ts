/* import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema({
    //_id: false,
    id: true, timestamps: true,
    collection: 'classes'
})
export class Classes {

    @Prop()
    code: string

    @Prop()
    name: string

    @Prop()
    level: string

    @Prop()
    academicYear: string
}

export const ClassesSchema = SchemaFactory.createForClass(Classes)
export type ClassesDocument = HydratedDocument<Classes> */