package ru.itsinfo.fetchapi.service;

import org.springframework.lang.Nullable;
import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import ru.itsinfo.fetchapi.model.User;
import ru.itsinfo.fetchapi.model.UserAvito;

import javax.servlet.http.HttpSession;
import java.util.List;

public interface UserAvitoService {
    List<UserAvito> findAll();

    UserAvito getOne(Long id);

    UserAvito insert(UserAvito user);

    UserAvito update(UserAvito user);

    void delete(Long id);
}
