package shemuel.bmi.bmi_calc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shemuel.bmi.bmi_calc.model.patient;
import shemuel.bmi.bmi_calc.repository.PatientRepo;

@Service
public class PatientServicesImplementation implements PatientServices {
    @Autowired
    private PatientRepo patientRepo; // inject the patientRepo into this class

    @Override
    public patient savePatient(patient patient) {
        return patientRepo.save(patient); // save the patient into the patients' srepository
    }

    @Override
    public patient getPatientById(int id) {
        Optional<patient> patient = patientRepo.findById(id);
        if (patient.isPresent()) {
            return patient.get();
        }
        return null;
    }

    @Override
    public List<patient> getAllPatients() {
        return patientRepo.findAll(); // get all the patients into the repository
    }
    
}
