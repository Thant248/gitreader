package com.example.studentregistrationform.model.utils.exceptions;

import com.example.studentregistrationform.model.dto.ErrorResponse;
import  com.example.studentregistrationform.model.dto.ErrorResponse.Type;

import java.util.List;

public class ApiBaseException extends  RuntimeException {


    public static final long SerialVersionUID = 1L;

    private Type type;
    private List<String> messages;


    public ApiBaseException( Type type, List<String> messages) {
        super("%S exception in api".formatted(type.name()));
        this.type = type;
        this.messages = messages;
    }

    public Type getType() {
        return type;
    }

    public List<String> getMessages() {
        return messages;
    }
}
