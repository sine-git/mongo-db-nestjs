import { PartialType } from "@nestjs/mapped-types";
import { Teachers } from "src/school/teachers/teachers.schema";
import { Schools } from "../schools.schema";

export class UpdateSchoolDto extends PartialType(Schools) {

}