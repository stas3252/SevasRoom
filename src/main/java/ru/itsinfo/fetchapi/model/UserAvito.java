package ru.itsinfo.fetchapi.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "userAvito")
public class UserAvito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;

    /*---------------------------------------------*/
    @OneToMany(
            mappedBy = "userAvito",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private Set<Shop> shops = new HashSet<>();
    /*---------------------------------------------*/
    public UserAvito() {}
    public UserAvito(String firstName) {
        this.firstName = firstName;
    }

    public void addShop(Shop shop) {
        shops.add(shop);
        shop.setUserAvito(this);
    }

    public void deleteShop(Shop shop) {
        shops.remove(shop);
        shop.setUserAvito(null);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Shop> getShops() {
        return shops;
    }

    public void setShops(Set<Shop> shops) {
        this.shops = shops;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String toString() {
        return "AvitoUser fname = " + firstName;
    }
}
