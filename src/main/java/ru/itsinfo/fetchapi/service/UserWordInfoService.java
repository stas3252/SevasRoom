package ru.itsinfo.fetchapi.service;

import org.springframework.validation.BindingResult;
import ru.itsinfo.fetchapi.model.UserWordInfo;
import ru.itsinfo.fetchapi.model.Word;

import java.util.List;
import java.util.Optional;

public interface UserWordInfoService {
    List<UserWordInfo> findAll();

    Optional<UserWordInfo> getById(Long id);

    UserWordInfo insert(UserWordInfo userWordInfo, BindingResult bindingResult);

    UserWordInfo update(UserWordInfo userWordInfo, BindingResult bindingResult);

    List<UserWordInfo> findWordsByUserId(long id);

    void deleteById(Long id);
}
