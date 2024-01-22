package com.example.studentregistrationform.model.repo;

import com.example.studentregistrationform.model.entity.Education;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import java.util.List;

public interface EducationRepository extends JpaRepositoryImplementation<Education, Integer> {
}
