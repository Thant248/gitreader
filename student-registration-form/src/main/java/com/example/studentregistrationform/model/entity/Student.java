package com.example.studentregistrationform.model.entity;

import com.example.studentregistrationform.model.consts.Gender;
import com.example.studentregistrationform.model.embemdded.AuditEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.val;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
@EntityListeners(value = AuditingEntityListener.class)
@SequenceGenerator(name = "student_seq", allocationSize = 1)
@Inheritance(strategy = InheritanceType.JOINED)
public class Student  extends AuditEntity {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "student_seq")
    private int id;

    private String name;

    private String NRC;

    private String email;

    private String phone;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime DateOfBirth;



    private String password;

    @OneToOne(fetch = FetchType.EAGER,cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Address address;

    @OneToMany(mappedBy = "student",fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE}, orphanRemoval = true)
    private List<Education> educations = new ArrayList<>();

    public void addEducation(Education education){
        this.educations.add(education);
        education.setStudent(this);
    }









}
