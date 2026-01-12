import { name } from './../../node_modules/ci-info/index.d';
import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { MongooseModule } from '@nestjs/mongoose';
//import { Students, StudentsSchema } from './models/student.model';
//import { Classes, ClassesSchema } from './models/class.model';
import { SchoolController } from 'src/school.controller';
import { Classes, ClassesSchema } from './classes/classes.schema';
import { Students, StudentsSchema } from './students/students.schema';
import { Subjects, SubjectsSchema } from './subjects/subjects.schema';
import { Teachers, TeachersSchema } from './teachers/teachers.schema';
import { Schools } from './schools/schools.schema';

@Module({
  providers: [SchoolService],
  controllers: [SchoolController],
  imports: [MongooseModule.forFeature([

  ])
  ]
})
export class SchoolModule { }
