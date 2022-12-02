package com.academia.payment.dao;

import com.academia.payment.bean.Comp;
import com.academia.payment.bean.HR;

import java.util.List;

public interface CompDAO {

    boolean addComp(Comp compObj);

    List<Comp> getComList();
    List<HR> getcompHR(Long comp_id);
    Boolean delComp(Long comp_id);
}
