package com.example.studentregistrationform.model.utils.exceptions;

import com.example.studentregistrationform.model.dto.ErrorResponse.Type;
import com.example.studentregistrationform.model.dto.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.nio.file.AccessDeniedException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestControllerAdvice
public class ExceptionHandlers {


    private final Map<Class<? extends AuthenticationException>, String> messages = new HashMap<>();

    {
        messages.put(UsernameNotFoundException.class, "Please check your login email.");
        messages.put(BadCredentialsException.class, "Please check your password.");
        messages.put(DisabledException.class, "Your account is disabled, please contact to admin team.");
        messages.put(LockedException.class, "Your account is locked, please contact to admin team.");
        messages.put(AccountExpiredException.class, "Your account is expired, please contact to admin team.");
    }


    @ExceptionHandler
    @ResponseStatus(code = HttpStatus.FORBIDDEN)
    public ErrorResponse handle(ApiSecurityException e){

        return  ErrorResponse.of(e);
    }

    @ExceptionHandler
    @ResponseStatus(code = HttpStatus.BAD_REQUEST)
    public ErrorResponse handle(ApiValidationException e){
        return  ErrorResponse.of(e);
    }

    @ExceptionHandler
    @ResponseStatus(code = HttpStatus.BAD_REQUEST)
    public ErrorResponse handle(ApiBusinessException e){
        return ErrorResponse.of(e);
    }

    @ExceptionHandler
    @ResponseStatus(code = HttpStatus.INTERNAL_SERVER_ERROR)
    public  ErrorResponse handle(ApiPlatFormException e){
        return  ErrorResponse.of(e);
    }


}
