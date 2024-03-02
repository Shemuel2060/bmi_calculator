package shemuel.bmi.bmi_calc.services;



import java.util.List;

import shemuel.bmi.bmi_calc.model.patient;


public interface PatientServices {

    public patient savePatient(patient patient); // saves patient into database

    public patient getPatientById(int id); // gets patient by their id from database

    public List<patient> getAllPatients(); // returns all the patients in database
}