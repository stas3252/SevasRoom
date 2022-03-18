package ru.itsinfo.fetchapi.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import ru.itsinfo.fetchapi.exception.UserDataIntegrityViolationException;
import ru.itsinfo.fetchapi.exception.UserNotFoundException;
import ru.itsinfo.fetchapi.exception.UserValidationException;
import ru.itsinfo.fetchapi.model.Word;
import ru.itsinfo.fetchapi.repository.WordRepository;
import ru.itsinfo.fetchapi.service.WordService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class WordServiceImpl implements WordService {
    private WordRepository wordRepo;

    @Autowired
    public WordServiceImpl(WordRepository wordRepo){
        this.wordRepo = wordRepo;
    }
    public List<Word> findAllWords() {
        return wordRepo.findAll(Sort.by(Sort.Direction.ASC, "russianName", "englishName"));
    }

    public Word getOneWord(Long id) {
        return wordRepo.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    public Word insertWord(Word word, BindingResult bindingResult) {
        return  wordRepo.save(word);
    }

    public Word updateWord(Word word, BindingResult bindingResult) {
        return wordRepo.save(word);
    }

    public void deleteWord(Long id) {
        wordRepo.deleteById(id);
    }
}
