package com.example.studentregistrationform.model.utils.exceptions;

import com.example.studentregistrationform.model.dto.ErrorResponse.Type;

import java.util.List;

public class ApiPlatFormException extends ApiBaseException{

    private static  final long serialVersionUID = 1L;

    public ApiPlatFormException(List<String> messages) {
        super(Type.PLATFORM, messages);
    }

}
