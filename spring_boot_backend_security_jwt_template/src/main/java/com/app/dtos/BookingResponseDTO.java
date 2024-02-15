package com.app.dtos;

import com.app.entities.GenderType;
import com.app.entities.StatusType;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BookingResponseDTO {
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long id;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private StatusType status;

    @NotNull
    private int noOfSeats;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private double price;

    private List<RegisterDTO> users;

    private List<PublishRideDTO> rides;
}
