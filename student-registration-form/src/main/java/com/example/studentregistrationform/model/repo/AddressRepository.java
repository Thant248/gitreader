package com.example.studentregistrationform.model.repo;

import com.example.studentregistrationform.model.entity.Address;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

public interface AddressRepository extends JpaRepositoryImplementation<Address, Integer> {
}
