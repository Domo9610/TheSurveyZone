package com.mongoosereum.dou_survey_zone.api.v1.dto.request.user;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
@AllArgsConstructor
@ApiModel("ID찾기 DTO")
public class SearchIDReq {

    @ApiModelProperty(name = "user_Name", notes = "유저 이름", example = "홍길동")
    private String user_Name;

    @ApiModelProperty(name = "user_Tel", notes = "유저 전화번호", example = "전화번호")
    private String user_Tel;

}
