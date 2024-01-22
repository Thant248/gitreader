package com.example.studentregistrationform.api;


import com.example.studentregistrationform.model.dto.StudentDto;
import com.example.studentregistrationform.model.dto.from.StudentForm;
import com.example.studentregistrationform.model.entity.Student;
import com.example.studentregistrationform.model.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.hibernate.metamodel.mapping.Bindable;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.naming.Binding;
import java.util.List;

@RestController
@RequestMapping("api/students")
public class StudentApi {

    private static final long serialVersionUID = 1L;

    @Autowired
    private   StudentService studentService;


    @GetMapping
    public StudentDto create(){
        return StudentDto.from(studentService.save());
    }

    @GetMapping("find")
    public List<StudentDto> findAllStudent(){
        return  studentService.findAll().stream().map(StudentDto::from).toList();
    }

    @PostMapping("create")
    public StudentDto createStudent(@Validated @RequestBody StudentForm form, Binding result){

        return studentService.create(form);
    }
}
