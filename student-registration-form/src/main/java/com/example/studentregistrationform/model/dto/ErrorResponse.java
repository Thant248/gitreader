package com.example.studentregistrationform.model.dto;

import ch.qos.logback.classic.spi.IThrowableProxy;
import com.example.studentregistrationform.model.utils.exceptions.ApiBaseException;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

@Data
@AllArgsConstructor
public class ErrorResponse {


    private Type type;

    private List<String> messages;



    public enum Type{
        PLATFORM, BUSINESS, SECURITY, VALIDATION
    }

    public static ErrorResponse of(ApiBaseException e){
        return new ErrorResponse(e.getType(), e.getMessages());
    }

}
