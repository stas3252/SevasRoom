package ru.itsinfo.fetchapi.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import ru.itsinfo.fetchapi.exception.UserNotFoundException;
import ru.itsinfo.fetchapi.model.Shop;
import ru.itsinfo.fetchapi.model.User;
import ru.itsinfo.fetchapi.repository.ShopRepo;
import ru.itsinfo.fetchapi.service.ShopService;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ShopServiceImpl implements ShopService {
    private final ShopRepo shopRepo;

    @Autowired
    public ShopServiceImpl(ShopRepo shopRepo) {
        this.shopRepo = shopRepo;
    }

    @Override
    public List<Shop> findAll() {
        return (List<Shop>) shopRepo.findAll();
    }

    @Override
    public Shop getOne(Long id) {
        //System.out.println(" в Shop getOne() - упал!");
        return shopRepo.findById(id).orElseThrow(() -> null);
    }

    @Override
    public Shop insert(Shop shop) {
        return shopRepo.save(shop);
    }

    @Override
    public Shop update(Shop shop) {
        return shopRepo.save(shop);
    }

    @Override
    public void delete(Long id) {
        shopRepo.deleteById(id);
    }
}
