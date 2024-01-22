package com.example.studentregistrationform.model.utils.exceptions;

import com.example.studentregistrationform.model.dto.ErrorResponse.Type;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

public class ApiSecurityException extends ApiBaseException{

    private static  final long serialVersionUID = 1L;

    public ApiSecurityException(List<String> messages){
        super(Type.SECURITY, messages);
    }
}
