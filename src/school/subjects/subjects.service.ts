import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Subjects } from "./subjects.schema";
import { Model } from "mongoose";

@Injectable()
export class SubjectsService {

    constructor(@InjectModel(Subjects.name) private readonly subjectModel: Model<Subjects>) {

    }
    findOne(id: string) {
        return this.subjectModel.findById(id)
    }

}
