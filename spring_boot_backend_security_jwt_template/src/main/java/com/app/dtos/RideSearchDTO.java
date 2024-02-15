package com.app.dtos;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RideSearchDTO {
    @NotBlank
    private String startCity;
    @NotBlank
    private String endCity;
}
