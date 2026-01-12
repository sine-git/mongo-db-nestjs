import { PartialType } from "@nestjs/mapped-types";
import { Students } from "../students.schema";

export class CreateStudentDto extends PartialType(Students) { }