import { PartialType } from "@nestjs/mapped-types";
import { Schools } from "../schools.schema";

export class CreateSchoolDto extends PartialType(Schools) {

}