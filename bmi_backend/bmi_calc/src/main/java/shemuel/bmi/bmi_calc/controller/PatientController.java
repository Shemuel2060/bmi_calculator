package shemuel.bmi.bmi_calc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import shemuel.bmi.bmi_calc.model.patient;
import shemuel.bmi.bmi_calc.services.PatientServices;

/*
 * This calass handles HTTP requests
 */
@CrossOrigin
@RestController
@RequestMapping("/patient")
public class PatientController {
    @Autowired
    private PatientServices patientService;

    @PostMapping("/addPatient") // post data to the database
    public String addPatient(@RequestBody patient post_patient) {
        patientService.savePatient(post_patient);
        return "New patient added";
    }
    @GetMapping("/getPatient/{id}") // get the patient specified from the database
    public patient getPatient(@PathVariable("id") int id) {
        return patientService.getPatientById(id);
    }
    @GetMapping("/getAllPatients") // get all patients in the database
    public List<patient> getAllPatients() {
        return patientService.getAllPatients();
    
    }

}
