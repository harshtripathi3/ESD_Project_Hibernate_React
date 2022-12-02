package com.academia.payment.service;

import com.academia.payment.bean.Employee;
import com.academia.payment.dao.impl.EmpDAOImpl;

public class EmployeeService {
    EmpDAOImpl empDAO = new EmpDAOImpl();

    public Employee login(Employee emp){
        Employee loggedInemp = empDAO.login(emp);

        // If no login happens, then return null
        if (loggedInemp == null)
            return null;

        // Setting billList to null to avoid cyclic dependency issues

        return loggedInemp;
    }

}