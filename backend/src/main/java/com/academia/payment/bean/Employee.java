package com.academia.payment.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer empidId;

    @Column(nullable = false)
    private String firstName;

    @Column
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;
    @Column
    private String title;
    @Column
    private String ph_path;
    @Column
    private String department;


    public Employee() {
    }

    public Employee(String firstName, String lastName, String email, String password,String title,String ph_path,String department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.title=title;
        this.ph_path=ph_path;
        this.department=department;
    }

    public Integer getEmpidId() {
        return empidId;
    }

    public void setEmpidId(Integer empidId) {
        this.empidId = empidId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPh_path() {
        return ph_path;
    }

    public void setPh_path(String ph_path) {
        this.ph_path = ph_path;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}