import { PartialType } from "@nestjs/mapped-types";
import { Students } from "../students.schema";

export class UpdateStudent extends PartialType(Students) { }