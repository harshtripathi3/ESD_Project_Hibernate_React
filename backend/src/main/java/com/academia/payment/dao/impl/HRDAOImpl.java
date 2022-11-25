package com.academia.payment.dao.impl;

import com.academia.payment.bean.Comp;
import com.academia.payment.bean.HR;
import com.academia.payment.dao.HRDAO;
import com.academia.payment.util.HibernateSessionUtil;
import jakarta.persistence.Query;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.ArrayList;
import java.util.List;

public class HRDAOImpl implements HRDAO {


    @Override
    public boolean addHR(HR HRobj) {
        try(Session session = HibernateSessionUtil.getSession()){  // session created got access of hibernate session object
            Transaction transaction = session.beginTransaction();  // transaction initiated
            session.save(HRobj);                                 // using session object to save java object into MySQL
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
    public List<HR> getAllHR() {
        try (Session session = HibernateSessionUtil.getSession()){
            List<HR> HRList = new ArrayList<>();
            for (final Object d : session.createQuery("from HR inner join Comp").list()) {
                HRList.add((HR) d);
            }
            return HRList;

        } catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
            return null;
        }
    }

    @Override
    public boolean updateHR(Long hr_id,HR HRobj) {

        try (Session session = HibernateSessionUtil.getSession()) {
            Transaction t = session.beginTransaction();

            Query q = session.createQuery("update HR set comp_id=:c, email=:e where hr_id=:ID");
            q.setParameter("ID", hr_id);
            q.setParameter("c", HRobj.getComp_id());
            q.setParameter("e",HRobj.getEmail());
            int r=q.executeUpdate();
            t.commit();
            return true;
        }
        catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
            return false;
        }
    }

    @Override
    public Boolean delHR(Long hr_id) {
        try (Session session = HibernateSessionUtil.getSession()) {
            Transaction transaction = session.beginTransaction();
            Query query=session.createQuery("DELETE FROM HR WHERE hr_id=:Id");
            query.setParameter("Id", hr_id);
            query.executeUpdate();
            transaction.commit();
            return true;

        } catch (HibernateException exception) {
            System.out.print(exception.getLocalizedMessage());
        }
        return false;
    }
}
