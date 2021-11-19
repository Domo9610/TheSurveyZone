package com.mongoosereum.dou_survey_zone.v1.api.common;

import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE)
public class TestController{
    //
    @GetMapping(path="/ddd")
    public String test1( @AuthenticationPrincipal String userEmail
    ){
        return userEmail;
    }
}