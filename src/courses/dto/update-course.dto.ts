import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDto } from "./create-course.dto";

export class UpdateCourseDto extends PartialType(CreateCourseDto){
    // extendo de create as mesmas variáveis sendo opcionais
}

//npm i @nestjs/mapped-types
