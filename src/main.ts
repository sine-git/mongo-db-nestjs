import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SchoolService } from './school/school.service';

async function standAlonebootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const schoolService = app.get(SchoolService)
  //const student = await schoolService.create()
  //const deletedStudent = await schoolService.deleteById()
  //const student = await schoolService.findOne()
  const students = await schoolService.findAll()
  await app.close()
  //console.log("The application is closed...")
  //await app.listen(3000);
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //console.log("The application is closed...")
  await app.listen(3400);
}
bootstrap();
