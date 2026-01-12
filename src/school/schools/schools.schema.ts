import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { IsString } from "class-validator"
import mongoose from "mongoose"
import { ClassesSchema } from "../classes/classes.schema"
import { query } from "express"

@Schema({ collection: 'schools' })
export class Schools {

    @Prop()
    @IsString()
    name: string
    @Prop()
    @IsString()
    address: string
    @Prop()
    @IsString()
    director: string
}

export const SchoolsSchema = SchemaFactory.createForClass(Schools)



/* SchoolsSchema.pre('deleteOne', { document: false, query: true }, async function () {
    const classesModel = mongoose.model('Classes', ClassesSchema)
    const filter = this.getFilter()
    console.log('Deleting id ', filter._id)
    const deleteResult = await classesModel.deleteMany({ schoolId: filter._id })
    console.log('Deletion completed...')

}) */