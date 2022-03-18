package ru.itsinfo.fetchapi.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.itsinfo.fetchapi.model.UserAvito;
import ru.itsinfo.fetchapi.repository.UserAvitoRepo;
import ru.itsinfo.fetchapi.service.UserAvitoService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserAvitoServiceImpl implements UserAvitoService {

    private final UserAvitoRepo userAvitoRepo;

    @Autowired
    public UserAvitoServiceImpl(UserAvitoRepo userAvitoRepo) {
        this.userAvitoRepo = userAvitoRepo;
    }

    @Override
    public List<UserAvito> findAll() {
        return userAvitoRepo.findAll();
    }

    @Override
    public UserAvito getOne(Long id) {
        return userAvitoRepo.findById(id).orElseThrow();
    }

    @Override
    public UserAvito insert(UserAvito user) {
        return userAvitoRepo.save(user);
    }

    @Override
    public UserAvito update(UserAvito user) {
        return userAvitoRepo.save(user);
    }

    @Override
    public void delete(Long id) {
        userAvitoRepo.deleteById(id);
    }
}
