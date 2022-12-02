package com.academia.payment.bean;

import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table
public class HR {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hr_id;
    @Column(nullable = false)
    private String f_name;
    private String l_name;
    @Column(unique=true, nullable = false)
    private String email;
    private Long con;

    @OneToOne(cascade = CascadeType.ALL)
    //@Cascade({org.hibernate.annotations.CascadeType.DELETE_ORPHAN})
    @JoinColumn(name = "comp_id")
    //@Fetch(value = FetchMode.SUBSELECT)
    private Comp comp_ID;


    public Long getHr_id() {
        return hr_id;
    }

    public void setHr_id(Long hr_id) {
        this.hr_id = hr_id;
    }

    public String getF_name() {
        return f_name;
    }

    public void setF_name(String f_name) {
        this.f_name = f_name;
    }

    public String getL_name() {
        return l_name;
    }

    public void setL_name(String l_name) {
        this.l_name = l_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getCon() {
        return con;
    }

    public void setCon(Long con) {
        this.con = con;
    }

    public Comp getComp_id() {
        return comp_ID;
    }

    public void setComp_id(Comp comp_id) {
        this.comp_ID = comp_id;
    }

}
