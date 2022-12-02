package com.academia.payment.dao;

import com.academia.payment.bean.Employee;


public interface EmpDAO {
    Employee login(Employee emp);
    void createemp(Employee emp);
}
