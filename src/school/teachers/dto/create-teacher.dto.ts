import { PartialType } from "@nestjs/mapped-types";
import { Teachers } from "../teachers.schema";

export class CreateTeacherDto extends PartialType(Teachers) {

}