package com.example.studentregistrationform.model.utils.exceptions;

import com.example.studentregistrationform.model.dto.ErrorResponse.Type;
import org.aspectj.bridge.Message;

import java.util.List;

public class ApiValidationException extends ApiBaseException{

    private static  final long serialVersionUID = 1L;

    public ApiValidationException(List<String> messages){
        super(Type.VALIDATION, messages);
    }
}
