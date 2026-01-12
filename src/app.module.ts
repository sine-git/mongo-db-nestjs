import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolModule } from './school/school.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SchoolService } from './school/school.service';
import { SchoolController } from './school.controller';
import { UserModule } from './user/user.module';
import { SchoolsModule } from './school/schools/schools.module';
import { TeachersModule } from './school/teachers/teachers.module';
import { SubjectsModule } from './school/subjects/subjects.module';
import { StudentsModule } from './school/students/students.module';
import { ClassesModule } from './school/classes/classes.module';

@Module({
  imports: [
    SchoolsModule,
    TeachersModule,
    SubjectsModule,
    StudentsModule,
    ClassesModule,
    UserModule, MongooseModule.forRoot('mongodb://localhost:27017/inpt',
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
