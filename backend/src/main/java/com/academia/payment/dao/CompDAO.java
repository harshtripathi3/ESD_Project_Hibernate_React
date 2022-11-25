package com.academia.payment.dao;

import com.academia.payment.bean.Comp;

import java.util.List;

public interface CompDAO {

    boolean addComp(Comp compObj);

    List<Comp> getComList();
}
