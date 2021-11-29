package com.mongoosereum.dou_survey_zone.api.v1.exception._404_NotFound;

import com.mongoosereum.dou_survey_zone.api.v1.exception.BusinessException;
import com.mongoosereum.dou_survey_zone.api.v1.exception.ErrorCode;

public class NotFoundEntityException extends BusinessException {
    public NotFoundEntityException(ErrorCode errorCode){
        super("존재하지 않는 정보의 접근입니다.");
        super.errorCode = errorCode;
    }
}