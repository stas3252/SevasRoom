package ru.itsinfo.fetchapi.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import ru.itsinfo.fetchapi.model.UserWordInfo;
import ru.itsinfo.fetchapi.model.Word;
import ru.itsinfo.fetchapi.repository.UserWordInfoRepository;
import ru.itsinfo.fetchapi.service.UserWordInfoService;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserWordInfoServiceImpl implements UserWordInfoService {
    private UserWordInfoRepository userWordInfoRepository;
    @Autowired
    public UserWordInfoServiceImpl(UserWordInfoRepository userWordInfoRepository) {
        this.userWordInfoRepository = userWordInfoRepository;
    }
    @Override
    public List<UserWordInfo> findAll() {
        return userWordInfoRepository.findAll();
    }

    @Override
    public Optional<UserWordInfo> getById(Long id) {
        return userWordInfoRepository.findById(id);
    }

    @Override
    public UserWordInfo insert(UserWordInfo userWordInfo, BindingResult bindingResult) {
        return userWordInfoRepository.save(userWordInfo);
    }

    @Override
    public UserWordInfo update(UserWordInfo userWordInfo, BindingResult bindingResult) {
        return userWordInfoRepository.save(userWordInfo);
    }

    @Override
    public void deleteById(Long id) {
        userWordInfoRepository.deleteById(id);
    }

    @Override
    public List<UserWordInfo> findWordsByUserId(long id) {
        return userWordInfoRepository.findWordsByUserId(id);
    }
}
