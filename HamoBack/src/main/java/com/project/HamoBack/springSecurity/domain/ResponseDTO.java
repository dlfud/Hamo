package com.project.HamoBack.springSecurity.domain;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class ResponseDTO {
    String code;
    String message;
    HttpStatus status;
}