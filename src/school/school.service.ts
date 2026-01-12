import { classes } from './../../node_modules/@types/istanbul-lib-coverage/index.d';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Students } from './students/students.schema';



@Injectable()
export class SchoolService {

    constructor(
        @InjectModel('Students') private readonly studentModel: Model<Students>,
        //@InjectModel('Classes') private readonly classesModel: Model<ClassesDocument>,
    ) {
    }


    async findAll() {
        return await this.studentModel.find()
            .populate('classId')
        /*  .populate({
             path: 'classId'
         }) */
        //.lean()
        //return await this.studentModel.find()
    }
    async findOne() {
        const id = new Types.ObjectId('695e91639a1af37097a0ff8b')
        return (await this.studentModel.findById(id).populate('class').lean())
        //return await this.studentModel.find()
    }

    async create() {
        //classId: ObjectId('695e91af9a1af37097a0ff8c'),
        const student = {
            firstName: 'Alima',
            lastName: 'Taboure',
            //classId: new Types.ObjectId('695e91af9a1af37097a0ff8c'),
        }
        const savedStudent = await this.studentModel.create(student)
        return savedStudent
    }


    async deleteById() {
        const id = new Types.ObjectId('695f9a1d0c14fd8aded96a7e')
        const deletedStudent = await this.studentModel.findByIdAndDelete(id)
        return deletedStudent;
    }
}
