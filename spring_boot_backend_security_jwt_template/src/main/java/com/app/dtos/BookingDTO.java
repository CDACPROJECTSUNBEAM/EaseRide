package com.app.dtos;

import com.app.entities.PublishRide;
import com.app.entities.Register;
import com.app.entities.StatusType;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.time.LocalDateTime;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BookingDTO {
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long id;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private StatusType status;

    @NotNull
    private int noOfSeats;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private double price;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long rideIdId;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long userIdId;
    
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private LocalDateTime createDate;

}
