package com.academia.payment.dao;

import com.academia.payment.bean.HR;

import java.util.List;

public interface HRDAO {

    boolean addHR(HR HRobj);
    List<HR> getAllHR();
    boolean updateHR(Long hr_id,HR HRobj);
    Boolean delHR(Long hr_id);

}
