package com.mongoosereum.dou_survey_zone.api.v1.dto.request.user;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Data
@Builder
@AllArgsConstructor
@ApiModel("로그인 DTO")
public class SigninReq {

    @NotBlank
    @ApiModelProperty(name = "user_Email", notes = "유저 Email", example = "test@gmail.com")
    private String user_Email;

    @NotBlank
    @ApiModelProperty(name = "user_Password", notes = "유저 Password", example = "password123!")
    private String user_Password;
}