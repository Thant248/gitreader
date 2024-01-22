package com.example.studentregistrationform.model.dto.from;


import com.example.studentregistrationform.model.consts.Gender;
import com.example.studentregistrationform.model.dto.AddressDto;
import com.example.studentregistrationform.model.dto.EducationDto;
import com.example.studentregistrationform.model.entity.Address;
import com.example.studentregistrationform.model.entity.Education;
import com.example.studentregistrationform.model.entity.Student;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public record StudentForm(
        String name,
        String nrc,
        String email,
        String phone,
        Gender gender,
        LocalDateTime dateOfBirth,
        Integer address,
        Integer education,
        String password
)  {


    public Student entity(Function<Integer, Optional<Address>> addressResolve, Function<Integer, Optional<Education>> educationResolver){

        var entity = new Student();
        entity.setName(name);
        entity.setNRC(nrc);
        entity.setEmail(email);
        entity.setPhone(phone);
        entity.setGender(gender);
        entity.setDateOfBirth(dateOfBirth);
        entity.setAddress(addressResolve.apply(address).get());
        entity.setEducations(educationResolver.apply(education).stream().toList());
        entity.setPassword(password);

        return  entity;
    }
}
