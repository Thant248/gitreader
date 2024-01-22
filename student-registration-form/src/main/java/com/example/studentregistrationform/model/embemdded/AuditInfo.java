package com.example.studentregistrationform.model.embemdded;


import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import lombok.Data;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Data
@Embeddable
public class AuditInfo {


    @CreatedDate
    private LocalDateTime createAt;

    @CreatedBy
    private String createBy;

    @LastModifiedDate
    private LocalDateTime updateAt;

    @LastModifiedBy
    private String updateBy;
}
