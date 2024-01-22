package com.example.studentregistrationform.model.service;



import com.example.studentregistrationform.model.dto.StudentDto;

import com.example.studentregistrationform.model.dto.from.StudentForm;

import com.example.studentregistrationform.model.entity.Address;
import com.example.studentregistrationform.model.entity.Education;
import com.example.studentregistrationform.model.entity.Student;
import com.example.studentregistrationform.model.repo.AddressRepository;
import com.example.studentregistrationform.model.repo.EducationRepository;
import com.example.studentregistrationform.model.repo.StudentRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class StudentService {

    private static final long serialVersionUID = 1L;

    private final AddressRepository addressRepository;


    private final StudentRepository studentRepository;


    private final EducationRepository educationRepository;


    @Transactional
    public StudentDto create(StudentForm form){
        return  StudentDto.from(studentRepository.save(form.entity(addressRepository::findById, educationRepository::findById)));
    }


    public List<Student> findAll(){
        return studentRepository.findAll();
    }


    public Student save() {

        var student = new Student();
        student.setName("Pone Chit");
        student.setNRC("7/MaMaKa(N)172334");

        var address = new Address();
        address.setStudent(student);
        address.setTownship("Tamwe");
        address.setRegion("Myanmar");
        address.setCapital("Yangon");
        address.setStreet("ZaNila");
        address.setName("Kalay");

        student.setAddress(address);

        student.setPassword(address.getName());

        var education = new Education();
        education.setBachelor("BSC");
        education.setYear(LocalDateTime.now());
        education.setStudent(student);

        student.addEducation(education);

        student.setDateOfBirth(LocalDateTime.now());
        student.setPhone("09360952396");
        student.setEmail("phonechit@gmail.com");

        return  student;

    }




}
