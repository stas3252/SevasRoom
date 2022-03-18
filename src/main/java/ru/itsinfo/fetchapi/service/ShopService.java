package ru.itsinfo.fetchapi.service;

import org.springframework.lang.Nullable;
import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import ru.itsinfo.fetchapi.model.Shop;
import ru.itsinfo.fetchapi.model.User;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

public interface ShopService {
    List<Shop> findAll();

    Shop getOne(Long id);

    Shop insert(Shop shop);

    Shop update(Shop shop);

    void delete(Long id);

}
