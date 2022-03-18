package ru.itsinfo.fetchapi.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "shop_avito")
public class Shop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    /*---------------------------------*/
    @ManyToOne(fetch = FetchType.LAZY)
    private UserAvito userAvito;
    /*---------------------------------*/
    public Shop(){}
    public Shop(String name) {this.name = name;}

    public void setId(Long id) {this.id = id;}
    public Long getId() {return id;}
    public void setName(String name) {this.name = name;}
    public String getName() {return name;}

    public void setUserAvito(UserAvito userAvito) {
        this.userAvito = userAvito;
    }

    public UserAvito getUserAvito() {
        return userAvito;
    }

    public String toString() {
        return "name shop = " + name;
    }
}