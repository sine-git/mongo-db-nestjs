import { PartialType } from "@nestjs/mapped-types";
import { Teachers } from "src/school/teachers/teachers.schema";
import { Subjects } from "../subjects.schema";

export class UpdateSubjectDto extends PartialType(Subjects) {

}