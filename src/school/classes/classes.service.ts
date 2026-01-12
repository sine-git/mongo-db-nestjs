import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Classes } from "./classes.schema";
import { Model, Types } from "mongoose";
import { Students } from "../students/students.schema";

@Injectable()
export class ClassesService {
    constructor(
        @InjectModel(Classes.name) private readonly classesModel: Model<Classes>,
        @InjectModel(Students.name) private readonly studentsModel: Model<Students>
    ) {

    }
    async findOne(id: string) {
        const isValidId = Types.ObjectId.isValid(id)
        if (!isValidId)
            throw new NotFoundException('Student not found !!!')
        const dbClass = await this.classesModel.findById(id)
        if (!dbClass) {
            throw new NotFoundException('Student not found !!!')
        }
        return dbClass

    }


    async findStudentsByClassName(name: string) {

        return this.studentsModel.aggregate([
            {
                $lookup: {
                    localField: 'classId',
                    foreignField: '_id',
                    from: 'classes',
                    as: 'class',
                }
            },
            {
                $unwind: '$class'
            },
            {
                $match: {
                    'class.name': name
                }
            }
        ])
    }

    async countStudentsByClass() {
        const aggregation = await this.studentsModel.aggregate([
            {
                $lookup: {
                    localField: 'classId',
                    foreignField: '_id',
                    from: 'classes',
                    as: 'class',
                }
            },
            {
                $unwind: '$class'
            },
            {
                $group: {
                    _id: {
                        class: '$class.name'
                    },
                    /* _id: '$classId' */

                    students: { $sum: 1 },
                }
            },
            {
                $project: {
                    _id: 0,
                    classeName: '$_id.class',
                    students: '$students',
                }
            }
        ]).exec()
        return aggregation
    }

    async countStudentsByLevel() {
        const result = await this.studentsModel.aggregate(
            [
                {
                    $lookup: {
                        from: 'classes',
                        as: 'classes',
                        localField: 'classId',
                        foreignField: '_id',

                    }
                },
                {
                    $unwind: '$classes',
                },
                {
                    $group: {
                        _id: '$classes.level',
                        number:
                        {
                            $sum: 1
                        }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        number: 1,
                        level: '$_id',
                    }
                }
            ]
        ).sort({ number: 1 })
        return result
    }

}