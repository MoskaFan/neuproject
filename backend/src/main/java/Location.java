import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Location {

    private String id;
    private double size;
    private int maxCapacity;
    private BigDecimal price;
    private Address address;

}
