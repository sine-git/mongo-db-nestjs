import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Students } from "./students.schema";
import { Model, Types } from "mongoose";

@Injectable()
export class StudentsService {
    constructor(@InjectModel(Students.name) private readonly studentsModel: Model<Students>) {
    }
    findAll() {
        return this.studentsModel.find().populate('subjects')
    }


    findAllLight() {
        return this.studentsModel.find({}, { firstName: 1, lastName: 1, classId: 1 })
    }

    async findAllBornBeforeDate(date: Date) {
        const students = await this.studentsModel.find({
            birthDate: {
                $lt: date
            }
        })
        return students
    }

    async findStudentsBySubject(subject: string) {
        const students = await this.studentsModel.aggregate(
            [
                {
                    $lookup: {
                        as: 'subjects',
                        localField: 'subjects',
                        from: 'subjects',
                        foreignField: '_id'
                    }
                },
                {
                    $unwind: '$subjects'
                },
                {
                    $match: {
                        'subjects.name': subject
                    }
                },
                {
                    $project: {
                        _id: 0,
                        name: { $concat: ['$firstName', ' ', '$lastName'] }
                        ,
                        subject: '$subjects.name',

                    }
                }
            ]
        )
        return students
    }


    async findStudentsWithClass() {
        return this.studentsModel.find({}, {
            firstName: 1,
            lastName: 1,
            _id: 0
        }).populate({ path: 'classId', model: 'Classes', select: 'name' })
        /*   .projection({
              firstName: '$firstName',
              lastName: '$lastName',
              className: '$classId.name'
          }) */
    }
    async findOne(id: string) {
        const isValidId = Types.ObjectId.isValid(id)
        if (!isValidId)
            throw new NotFoundException('Student not found !!!')

        const student = await this.studentsModel.findOne({ _id: id }).
            populate({
                path: 'subjects',
                model: 'Subjects'
            }).
            populate({
                path: 'classId',
                populate: {
                    path: 'schoolId',
                    model: 'Schools'
                }
            })
        if (!student)
            throw new NotFoundException('Student not found !!!')
        return student
    }

    async findStudentsWithSchool() {
        /*  const students = await this.studentsModel.aggregate([
             {
                 $lookup: {
                     from: 'classes',
                     as: 'class',
                     localField: 'classId',
                     foreignField: '_Id'
                 },
             },
             {
                 $lookup: {
 
                     from: 'school',
                     as: 'school',
                     localField: 'schoolId',
                     foreignField: '_Id'
                 }
             }
         ]) */
        const result = await this.studentsModel.find().populate({
            path: 'classId',
            model: 'Classes',
            populate: {
                path: 'schoolId',
                model: 'Schools'
            }
        })
        const students = result.map((student) => (
            {
                firstName: student.firstName,
                lastName: student.lastName,
                schoolName: student.classId['name'],
            }
        ))
        return students

    }

    async findStudentsWithSubjects() {
        const result = await this.studentsModel.find({}, { _id: 0, firstName: 1, lastName: 1 }).populate(
            {
                path: 'subjects',
                model: 'Subjects'
            }
        )

        const students = result.map((student) => ({
            firstName: student.firstName,
            lastName: student.lastName,
            subjects: student.subjects.map((subject) => (subject['name']))
        }))
        return students
    }

    async getAverageByStudent() {

        const result = this.studentsModel.aggregate()
    }

}