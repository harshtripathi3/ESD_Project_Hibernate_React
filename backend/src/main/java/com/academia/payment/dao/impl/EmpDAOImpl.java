package com.academia.payment.dao.impl;

import com.academia.payment.bean.Employee;
import com.academia.payment.dao.EmpDAO;
import com.academia.payment.util.HibernateSessionUtil;


import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.ArrayList;
import java.util.List;

public class EmpDAOImpl implements EmpDAO {
    /*
        This method performs login of the Student object specified
        So it basically checks whether the credentials provided in the Student object match with
        a Student object in the database
    */
    @Override
    public Employee login(Employee emp) {
        try (Session session = HibernateSessionUtil.getSession();){
            String empEmail = emp.getEmail();
            String empPassword = emp.getPassword();

            List<Object> result = new ArrayList<Object>(
                    session.createQuery(
                                    "FROM Employee WHERE email = :empEmail and password = :empPassword"
                            )
                            .setParameter("empEmail", empEmail)
                            .setParameter("empPassword", empPassword)
                            .list()
            );

            // If no valid Student found, return null so that login failure is understood
            if (result.size() == 0)
                return null;
            else
                return (Employee) result.get(0);
        }
        catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
        }

        return null;
    }

    @Override
    public void createemp(Employee emp) {
        try (Session session = HibernateSessionUtil.getSession()) {
            Transaction transaction = session.beginTransaction();
            session.save(emp);
            transaction.commit();
        }
        catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
        }

    }




}