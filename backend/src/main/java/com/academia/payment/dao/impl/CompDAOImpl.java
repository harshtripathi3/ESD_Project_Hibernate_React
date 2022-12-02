package com.academia.payment.dao.impl;

import com.academia.payment.bean.Comp;
import com.academia.payment.bean.HR;
import com.academia.payment.dao.CompDAO;
import com.academia.payment.util.HibernateSessionUtil;
import jakarta.persistence.Query;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.ArrayList;
import java.util.List;

public class CompDAOImpl implements CompDAO {

    @Override
    public boolean addComp(Comp compObj) {
        try(Session session = HibernateSessionUtil.getSession()){  // session created got access of hibernate session object
            Transaction transaction = session.beginTransaction();  // transaction initiated
            session.save(compObj);                                 // using session object to save java object into MySQL
            transaction.commit();                                  // committing transaction
            return true;
        }
        catch (HibernateException exception) {
            // if Hibernate Exception occurs return false
            // for related exception we can maintain separate logger / Sysout messages for easy debugging
            System.out.println("Hibernate Exception");
            System.out.print(exception.getLocalizedMessage());
            return false;
        }
        catch (Exception e){
            //generalized exception class for any IO / Arithmetic Exception
            System.out.print(e.getLocalizedMessage());
            return false;
        }
    }
    @Override
    public List<Comp> getComList() {
        try (Session session = HibernateSessionUtil.getSession()){
            List<Comp> departmentList = new ArrayList<>();
            for (final Object d : session.createQuery("from Comp ").list()) {
                departmentList.add((Comp) d);
            }
            return departmentList;

        } catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
            return null;
        }
    }

    @Override
    public List<HR> getcompHR(Long comp_id) {
        try(Session session=HibernateSessionUtil.getSession()){
            List<HR> hrslist =new ArrayList<>();
            for(final Object hrss:session.createQuery("from HR where comp_ID.comp_id=:h")
                    .setParameter("h",comp_id).list()){
                hrslist.add((HR) hrss);
            }
            if (hrslist.size() == 0)
                return null;
            else
                return hrslist;
        }
        catch (HibernateException exception) {
            System.out.println(exception.getLocalizedMessage());
        }

        return null;
    }

    @Override
    public Boolean delComp(Long comp_id) {
        try (Session session = HibernateSessionUtil.getSession()) {
            Transaction transaction = session.beginTransaction();
//            Query query1=session.createQuery("DELETE FROM HR where comp_id=:Id");
//            query1.setParameter("Id",comp_id);
//            query1.executeUpdate();
            Query query=session.createQuery("DELETE FROM Comp WHERE comp_id=:Id");
            query.setParameter("Id", comp_id);
            query.executeUpdate();
            transaction.commit();
            return true;

        } catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
        }
        return false;
    }
}
