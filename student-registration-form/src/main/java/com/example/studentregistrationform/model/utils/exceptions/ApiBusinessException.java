package com.example.studentregistrationform.model.utils.exceptions;


import com.example.studentregistrationform.model.dto.ErrorResponse.Type;

import java.util.List;

public class ApiBusinessException extends ApiBaseException {

    private static  final long serialVersionUID = 1L;

    public ApiBusinessException(List<String> messages) {

        super(Type.BUSINESS, messages);
    }
}
