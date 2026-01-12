import { PartialType } from "@nestjs/mapped-types";
import { Subjects } from "../subjects.schema";

export class CreateSubjectDto extends PartialType(Subjects) { }