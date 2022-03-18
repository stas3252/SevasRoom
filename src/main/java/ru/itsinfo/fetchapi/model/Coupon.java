package ru.itsinfo.fetchapi.model;

import javax.persistence.*;

@Entity
public class Coupon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    private Shop shop;

    public Coupon(){}
    public Coupon(String name) {this.name = name;}

    public void setId(Long id) {this.id = id;}
    public Long getId() {return id;}
    public void setName(String name) {this.name = name;}
    public String getName() {return name;}
    public void setShop(Shop shop) {this.shop = shop;}
    public Shop getShop() {return shop;}

    public String toString() {return name;}
}
