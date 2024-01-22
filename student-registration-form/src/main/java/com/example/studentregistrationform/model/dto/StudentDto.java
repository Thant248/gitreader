package com.example.studentregistrationform.model.dto;

import com.example.studentregistrationform.model.consts.Gender;
import com.example.studentregistrationform.model.entity.Address;
import com.example.studentregistrationform.model.entity.Student;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import org.w3c.dom.stylesheets.LinkStyle;

import java.time.LocalDateTime;
import java.util.stream.Collectors;


public record StudentDto(
        String name,
        String nrc,
        String email,
        String phone,
        Gender gender,
        LocalDateTime dateOfBirth,
        AddressDto address,
        EducationDto education,
        String password


) {


    public static  StudentDto from(Student entity){

        return  new StudentDto(entity.getName(), entity.getNRC(), entity.getEmail(), entity.getPhone(), entity.getGender()
        ,entity.getDateOfBirth(), AddressDto.from(entity.getAddress()), EducationDto.from(entity.getEducations().get(entity.getId())),entity.getPassword());
    }
}
