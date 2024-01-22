package com.example.studentregistrationform.model.dto;

import com.example.studentregistrationform.StudentRegistrationFormApplication;
import com.example.studentregistrationform.model.entity.Education;

import java.time.LocalDateTime;

public record EducationDto(

        LocalDateTime year,
        String bachelor


) {

   public static EducationDto from(Education entity){
       return new EducationDto(entity.getYear(), entity.getBachelor());
   }
}
