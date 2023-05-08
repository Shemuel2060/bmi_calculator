package shemuel.bmi.bmi_calc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * This class contains the column names for the DB main table
 */
@Entity
public class patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    
    // other columns
    public String name; // name of the patient
    public char sex; // sex of the patient
    public int age; // age of the patient
    public double height; // height of the patient
    public double weight; // weight of the patient
    public double bmi; // computed bmi of the patient
    
}
