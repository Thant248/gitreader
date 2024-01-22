package com.example.studentregistrationform.model.utils.exceptions;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.BindingResult;

@Aspect
@Configuration
public class ValidationExceptionAdvice {



    @Pointcut("within(com.example.studentregistrationform.api.*)")
    public void ApiMethod(){}

    @Before(value = "ApiMethod() && args(..,result)", argNames = "result")
    public void checkValidationException(BindingResult result){
        if (result.hasErrors()){
                throw new ApiValidationException(result.getFieldErrors().stream().map(fieldError -> fieldError.getDefaultMessage()).toList());
        }
    }
}
