package com.example.studentregistrationform.model.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@SequenceGenerator(name = "address_seq", allocationSize = 1)
public class Address {


    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "address_seq")
    private int id;


    private String name;


    private String region;


    private String capital;

    private  String township;

    private String street;

    @OneToOne(optional = false)
    private Student student;
}
