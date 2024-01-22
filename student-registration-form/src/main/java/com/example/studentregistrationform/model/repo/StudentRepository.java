package com.example.studentregistrationform.model.repo;

import com.example.studentregistrationform.model.entity.Student;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

public interface StudentRepository extends JpaRepositoryImplementation<Student, Integer> {
}
