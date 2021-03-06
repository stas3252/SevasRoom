package project.controller;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
//import project.service.UserService;

@RestController
@RequestMapping("/api")
public class ApplicationRestController {
   /* private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public ApplicationRestController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }
*/
    @GetMapping(value = "/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("все норм");
    }
/*
    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> findAll() {
        return ResponseEntity.ok(userService.findAllUsers());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getOne(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getOneUser(id));
    }

    @PostMapping("/users")
    public ResponseEntity<User> insert(@Valid @RequestBody User user, BindingResult bindingResult) {
        return ResponseEntity.ok(userService.insertUser(user, bindingResult));
    }

    @PutMapping("/users")
    public ResponseEntity<User> update(@Valid @RequestBody User user, BindingResult bindingResult) {
        return ResponseEntity.ok(userService.updateUser(user, bindingResult));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/roles")
    public ResponseEntity<Iterable<Role>> findAllRoles() {
        return ResponseEntity.ok(roleService.findAllRoles());
    }

    /*---------------------------API-for-Word---------------------------------------------------------------------------------*/
/*
    @GetMapping(value = "/words")
    public ResponseEntity<List<Word>> getAllWords() {
        return ResponseEntity.ok(wordService.findAllWords());
    }

    @GetMapping("/words/{id}")
    public ResponseEntity<Word> getOneWord(@PathVariable Long id) {
        return ResponseEntity.ok(wordService.getOneWord(id));
    }

    @PostMapping("/words")
    public ResponseEntity<Word> insert(@Valid @RequestBody Word word, BindingResult bindingResult) {
        return ResponseEntity.ok(wordService.insertWord(word, bindingResult));
    }

    @DeleteMapping("/words/{id}")
    public ResponseEntity<Void> deleteWord(@PathVariable Long id) {
        wordService.deleteWord(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/words")
    public ResponseEntity<Word> updateWord(@Valid @RequestBody Word word, BindingResult bindingResult) {
        return ResponseEntity.ok(wordService.updateWord(word, bindingResult));
    }

    /*------------------------------API-взаимоействие-пользователя-со-словами-------------------------*/
/*
    @GetMapping("/new-words-for-user") // в url + {id}
    public ResponseEntity<List<Word>> getNewWordsForUser() {
        //хм.. из простого словаря фильтровать каждое слово... как-то не очень...
        //мб по 10 слов давать, так снизим нагрузку... но подумать можно о создании групп слов
        // и получится, что нам просто группы отсекать, а не слова... хм
        // ну пока сделаю набор из 10 слов, а там как-то подгрузку настрою.

        // не, думать конкретно нужно. Посоветоваться с Саньком, а то не ясно до конца еще с бд
        // как связать пользователя е его словарь бл...


        return ResponseEntity.ok(wordService.findAllWords()); // пока простов ернули все слова.
    }

    @GetMapping("/all-my-words")
    public ResponseEntity<List<Word>> getAllMyWords() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("*******************************");
        System.out.println(auth.getPrincipal());
        System.out.println("*******************************");
        String str = auth.getPrincipal().toString();
        long idOfCurrentUser = Long.parseLong(str.substring(str.indexOf("id = ") + 5, str.indexOf(';')), 10);

        List<UserWordInfo> res = userWordInfoService.findWordsByUserId(idOfCurrentUser);
        List<Word> ans = new ArrayList<>();
        for (int i = 0; i < res.size(); i++) {
            long wordId = res.get(i).getWordId();
            String status = res.get(i).getStatusWord();
            Word word = wordService.getOneWord(wordId);
            word.setWordStatus(status);
            ans.add(word);
        }
        return ResponseEntity.ok(ans);
    }*/
}
