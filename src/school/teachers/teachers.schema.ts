import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Subject } from "rxjs";
import { Subjects } from "../subjects/subjects.schema";

@Schema({

})
export class Teachers {
    @Prop()
    firstName: string
    @Prop()
    lastName: string
    @Prop()
    speciality: string
    @Prop([{ type: Types.ObjectId, ref: 'Subjects' }])
    subjects: Subjects[]
}


export const TeachersSchema = SchemaFactory.createForClass(Teachers)