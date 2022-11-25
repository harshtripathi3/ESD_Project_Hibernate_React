package com.academia.payment.bean;

import jakarta.persistence.*;

@Entity
@Table
public class Comp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long comp_id;
    @Column(nullable = false)
    private String comp_name;
    private String comp_add;

    public Long getComp_id() {
        return comp_id;
    }

    public void setComp_id(Long comp_id) {
        this.comp_id = comp_id;
    }

    public String getComp_name() {
        return comp_name;
    }

    public void setComp_name(String comp_name) {
        this.comp_name = comp_name;
    }

    public String getComp_add() {
        return comp_add;
    }

    public void setComp_add(String comp_add) {
        this.comp_add = comp_add;
    }

}
