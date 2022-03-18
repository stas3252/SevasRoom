package ru.itsinfo.fetchapi.service;

import org.springframework.validation.BindingResult;
import ru.itsinfo.fetchapi.model.Word;

import java.util.List;

public interface WordService {
    List<Word> findAllWords();

    Word getOneWord(Long id);

    Word insertWord(Word word, BindingResult bindingResult);

    Word updateWord(Word word, BindingResult bindingResult);

    void deleteWord(Long id);
}
