package com.academia.payment.util;

import com.academia.payment.bean.Employee;
import com.academia.payment.dao.EmpDAO;
import com.academia.payment.dao.impl.EmpDAOImpl;
import org.hibernate.Session;

import java.util.Arrays;
import java.util.List;

/*
    Script that initializes the database with dummy entries for all tables
*/
public class InitializeDB {
    public static void main(String[] args) {

        List<List<String>> emps = Arrays.asList(
                Arrays.asList("Micheal", "Scott", "mike.scott@office.com", "1234","Manager","path","Outreach"),
                Arrays.asList("Jim", "Halpert", "jim.halpert@office.com", "1234","Co-Manager","path","Outreach"),
                Arrays.asList("Dwight", "Schrute", "dwight.schrute@office.com", "1234","Ass. to Manager","path","Outreach")
        );

        EmpDAO empDAO = new EmpDAOImpl();


        for (int i = 0; i < emps.size(); i++) {
            List<String> emp = emps.get(i);
            Employee empObj = new Employee(emp.get(0), emp.get(1), emp.get(2), emp.get(3), emp.get(4),
                    emp.get(5),emp.get(6));

            empDAO.createemp(empObj);

            Session session = HibernateSessionUtil.getSession();
        }
    }
}
