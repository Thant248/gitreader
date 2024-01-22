package com.example.studentregistrationform.model.embemdded;

import jakarta.persistence.MappedSuperclass;
import lombok.Data;

@Data
@MappedSuperclass
public class AuditEntity {

     private AuditInfo auditInfo = new AuditInfo();
}
