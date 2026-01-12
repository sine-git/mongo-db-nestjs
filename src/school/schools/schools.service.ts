import { Body, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Schools } from "./schools.schema";
import { Model } from "mongoose";
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from "./dto/update-school.dto";

@Injectable()
export class SchoolsService {


    constructor(@InjectModel(Schools.name) private readonly schoolModel: Model<Schools>) {
    }
    findAll() {
        return this.schoolModel.find()
    }

    findOne(id: string) {
        return this.findOne(id)
    }
    create(createSchoolDto: CreateSchoolDto) {
        return this.schoolModel.create(createSchoolDto)
    }

    update(id: string, updateSchoolDto: UpdateSchoolDto) {
        return this.schoolModel.findOneAndUpdate({ _id: id }, updateSchoolDto)
    }

    async deleteById(id: string) {
        const deletedSchool = await this.schoolModel.deleteOne({ _id: id })
        if (!deletedSchool)
            throw new NotFoundException('School not found !!!')
        return deletedSchool;

    }


}