package com.example.studentregistrationform.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@SequenceGenerator(name = "education_seq", allocationSize = 1)
public class Education {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "education_seq")
    private int id;

    private LocalDateTime year;

    private String bachelor;

    @ManyToOne(optional = false)
    private Student student;
}
