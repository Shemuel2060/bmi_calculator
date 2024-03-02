package shemuel.bmi.bmi_calc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import shemuel.bmi.bmi_calc.model.patient;

public interface PatientRepo extends JpaRepository<patient,Integer>{
    
}
