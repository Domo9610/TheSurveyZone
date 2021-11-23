package com.mongoosereum.dou_survey_zone.v1.api.common.mail;

import lombok.Builder;
import lombok.Data;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

@Data
@Builder
public class MailDTO {

    private String address;
    private String title;
    private String link;
    private String message;

}

