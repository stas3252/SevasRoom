const usersTableId = $('#users-table-rows');
const userFormId = $('#user-profile');
const userAddFormId = $('#user-addform');


const wordsTableId = $('#words-table-rows');
const wordFormId = $('#word-profile');
const wordAddFormId = $('#word-addForm');

const wordsTableIdForAddInDictionary = $('#words-table-rows-for-add-in-dictionary');
const allMyWordsInDictionaryTableRows = $('#all-my-words-in-dictionary-table-rows');

$('#nav-all-my-words-link').click(() => {
    loadMyAllWordsTable();
});

$('#nav-add-words-in-dictionary-link').click(() => {
    loadNewWordsTable();
});

$('#nav-users_table-link').click(() => {
    loadUsersTable();
});
$('#nav-user_form-link').click(() => {
    loadAddForm();
});

$('#nav-words_table-link').click(() => {
   loadWordsTable();
});

$('#nav-word_form-link').click(() => {
    loadAddFormForWord();
});

userAddFormId.find(':submit').click(() => {
    insertUser();
});

wordAddFormId.find(':submit').click(() => {
    insertWord();
});

function loadAddFormForWord() {
    $('#nav-word_form-link').addClass('active');
    $('#nav-word_form').addClass('show').addClass('active');


    $('#nav-users_table-link').removeClass('active');
    $('#nav-users_table').removeClass('show').removeClass('active');

    $('#nav-user_form-link').removeClass('active');
    $('#nav-user_form').removeClass('show').removeClass('active');

    $('#nav-words_table-link').removeClass('active');
    $('#nav-words_table').removeClass('show').removeClass('active');

    loadWordForInsertForm();
}

function loadWordForInsertForm() {
    _eraseWordAddForm();
    wordAddFormId.find('#newRussianName').val('');
    wordAddFormId.find('#newEnglishName').val('');
    wordAddFormId.find('#newPopular').val('0');
}

function _eraseWordAddForm() {
    wordAddFormId.find('.invalid-feedback').remove();
    wordAddFormId.find('#newRussianName').removeClass('is-invalid');
    wordAddFormId.find('#newEnglishName').removeClass('is-invalid');
    wordAddFormId.find('#newPopular').removeClass('is-invalid');
}

function loadWordsTable() {
    $('#nav-words_table-link').addClass('active');
    $('#nav-words_table').addClass('show').addClass('active');

    $('#nav-user_form-link').removeClass('active');
    $('#nav-user_form').removeClass('show').removeClass('active');
    $('#nav-users_table-link').removeClass('active');
    $('#nav-users_table').removeClass('show').removeClass('active');
    $('#nav-word_form-link').removeClass('active');
    $('#nav-word_form').removeClass('show').removeClass('active');

    getAllWords();
}

function loadMyAllWordsTable() {
    $('#nav-all-my-words-link').addClass('active');
    $('#nav-all-my-words').addClass('show').addClass('active');

    $('#nav-study-words-link').removeClass('active');
    $('#nav-study-words').removeClass('show').removeClass('active');
    $('#nav-add-words-in-dictionary-link').removeClass('active');
    $('#nav-add-words-in-dictionary').removeClass('show').removeClass('active');

    getAllMyWords();
}

function getAllMyWords() {
    fetch('/api/all-my-words').then(function (response) {
        if (response.ok) {
            response.json().then(words => {
                allMyWordsInDictionaryTableRows.empty();
                words.forEach(word => {
                    _appendMyWordRow(word);
                });
            });
        } else {
            console.error('Network request for users.json failed with response ' + response.status + ': ' + response.statusText);
        }
    });
}
function _appendMyWordRow(word) {
    allMyWordsInDictionaryTableRows
        .append($('<tr class="border-top bg-light">').attr('id', 'wordRow[' + word.id + ']')
            .append($('<td>').attr('id', 'wordData[' + word.id + '][russianName]').text(word.russianName))
            .append($('<td>').attr('id', 'wordData[' + word.id + '][englishName]').text(word.englishName))
            .append($('<td>').attr('id', 'wordData[' + word.id + '][popular]').text(word.popular))
            .append($('<td>').attr('id', 'wordData[' + word.id + '][wordStatus]').text(word.wordStatus))
        );
}

function loadNewWordsTable() {
    $('#nav-add-words-in-dictionary-link').addClass('active');
    $('#nav-add-words-in-dictionary').addClass('show').addClass('active');

    $('#nav-study-words-link').removeClass('active');
    $('#nav-study-words').removeClass('show').removeClass('active');

    getNewWordsForUser();
}

function loadUsersTable() {
    $('#nav-users_table-link').addClass('active');
    $('#nav-users_table').addClass('show').addClass('active');

    $('#nav-user_form-link').removeClass('active');
    $('#nav-user_form').removeClass('show').removeClass('active');
    $('#nav-words_table-link').removeClass('active');
    $('#nav-words_table').removeClass('show').removeClass('active');
    $('#nav-word_form-link').removeClass('active');
    $('#nav-word_form').removeClass('show').removeClass('active');
    getAllUsers();
}

function initNavigation() {
    $('#admin-area-tab').click(() => {
        $('#admin-area-tab').addClass('active').removeClass('btn-light').addClass('btn-primary').prop('aria-selected', true);
        $('#admin-area').addClass('active');
        $('#user-area-tab').removeClass('active').removeClass('btn-primary').addClass('btn-light').prop('aria-selected', false);
        $('#user-area').removeClass('active');
    });
    $('#user-area-tab').click(() => {
        $('#user-area-tab').addClass('active').removeClass('btn-light').addClass('btn-primary').prop('aria-selected', true);
        $('#user-area').addClass('active');
        $('#admin-area-tab').removeClass('active').removeClass('btn-primary').addClass('btn-light').prop('aria-selected', false);
        $('#admin-area').removeClass('active');
    });
}

function loadAddForm() {
    $('#nav-user_form-link').addClass('active');
    $('#nav-user_form').addClass('show').addClass('active');

    $('#nav-users_table-link').removeClass('active');
    $('#nav-users_table').removeClass('show').removeClass('active');
    $('#nav-words_table-link').removeClass('active');
    $('#nav-words_table').removeClass('show').removeClass('active');
    $('#nav-word_form-link').removeClass('active');
    $('#nav-word_form').removeClass('show').removeClass('active');
    loadUserForInsertForm();
}

function getAllUsers() {
    fetch('/api/users').then(function (response) {
        if (response.ok) {
            response.json().then(users => {
                usersTableId.empty();
                users.forEach(user => {
                    _appendUserRow(user);
                });
            });
        } else {
            console.error('Network request for users.json failed with response ' + response.status + ': ' + response.statusText);
        }
    });
}
//*******************************************************
function getAllWords() {
    fetch('/api/words').then(function (response) {
        if (response.ok) {
            response.json().then(words => {
                wordsTableId.empty();
                words.forEach(word => {
                    _appendWordRow(word);
                });
            });
        } else {
            console.error('Network request for users.json failed with response ' + response.status + ': ' + response.statusText);
        }
    });
}
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
function getNewWordsForUser() {
    fetch('/api/new-words-for-user').then(function (response) {
        if (response.ok) {
            response.json().then(words => {
                wordsTableIdForAddInDictionary.empty();
                words.forEach(word => {
                    showNewWordsForUser(word);
                });
            });
        } else {
            console.error('Network request for users.json failed with response ' + response.status + ': ' + response.statusText);
        }
    });
}
function showNewWordsForUser(word) {
    console.log("тут мы создаем строку, передаем все значения в нее и добавляем кнопки, чтоб пользователь мог выбрать слова")
    wordsTableIdForAddInDictionary
        .append($('<tr class="border-top bg-light">').attr('id', 'wordRow[' + word.id + ']')
            .append($('<td>').attr('id', 'wordData[' + word.id + '][russianName]').text(word.russianName))
            .append($('<td>').attr('id', 'wordData[' + word.id + '][englishName]').text(word.englishName))
            .append($('<td>').attr('id', 'wordData[' + word.id + '][popular]').text(word.popular))
            .append($('<td>').append($('<button class="btn btn-sm btn-info">')
                .click(() => {
                    console.log("хотим довавить в словарь");
                    //loadWordAndShowModalForm(word.id);
                }).text('Add')))
        );
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
function _appendWordRow(word) {
    console.log("тут мы создаем строку, передаем все значения в нее и добавляем кнопки")
    wordsTableId
        .append($('<tr class="border-top bg-light">').attr('id', 'wordRow[' + word.id + ']')
            .append($('<td>').attr('id', 'wordData[' + word.id + '][id]').text(word.id))
            .append($('<td>').attr('id', 'wordData[' + word.id + '][russianName]').text(word.russianName))
            .append($('<td>').attr('id', 'wordData[' + word.id + '][englishName]').text(word.englishName))
            .append($('<td>').attr('id', 'wordData[' + word.id + '][popular]').text(word.popular))
            .append($('<td>').append($('<button class="btn btn-sm btn-info">')
                .click(() => {
                    console.log("хоти изменить слово");
                    //loadWordAndShowModalForm(word.id);
                }).text('Edit')))
            .append($('<td>').append($('<button class="btn btn-sm btn-danger">')
                .click(() => {
                    console.log("хотим удалить слово");
                    deleteWord(word.id);
                    //loadWordAndShowModalForm(word.id, false);
                }).text('Delete')))
        );
    console.log("создали строку с id = " + word.id);
}
//*************************************************

function _appendUserRow(user) {
    usersTableId
        .append($('<tr class="border-top bg-light">').attr('id', 'userRow[' + user.id + ']')
            .append($('<td>').attr('id', 'userData[' + user.id + '][id]').text(user.id))
            .append($('<td>').attr('id', 'userData[' + user.id + '][firstName]').text(user.firstName))
            .append($('<td>').attr('id', 'userData[' + user.id + '][lastName]').text(user.lastName))
            .append($('<td>').attr('id', 'userData[' + user.id + '][age]').text(user.age))
            .append($('<td>').attr('id', 'userData[' + user.id + '][email]').text(user.email))
            .append($('<td>').attr('id', 'userData[' + user.id + '][roles]').text(user.roles.map(role => role.name)))
            .append($('<td>').append($('<button class="btn btn-sm btn-info">')
                .click(() => {
                    loadUserAndShowModalForm(user.id);
                }).text('Edit')))
            .append($('<td>').append($('<button class="btn btn-sm btn-danger">')
                .click(() => {
                    loadUserAndShowModalForm(user.id, false);
                }).text('Delete')))
        );
}

function _eraseUserModalForm() {
    userFormId.find('.invalid-feedback').remove();
    userFormId.find('#firstName').removeClass('is-invalid');
    userFormId.find('#email').removeClass('is-invalid');
    userFormId.find('#password').removeClass('is-invalid');
    userFormId.find('#age').removeClass('is-invalid');
}

function _setReadonlyAttr(value = true) {
    userFormId.find('#firstName').prop('readonly', value);
    userFormId.find('#lastName').prop('readonly', value);
    userFormId.find('#age').prop('readonly', value);
    userFormId.find('#email').prop('readonly', value);
    userFormId.find('#password').prop('readonly', value);
    userFormId.find('#roles').prop('disabled', value);
}

function _setReadOnlyAttrForWord(value = true) {
    wordFormId.find('#russianName').prop('readonly', value);
    wordFormId.find('#englishName').prop('readonly', value);
    wordFormId.find('#popular').prop('readonly', value);
}

function updateUser(id) {
    _eraseUserModalForm();

    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    let user = {
        'id': parseInt(userFormId.find('#id').val()),
        'firstName': userFormId.find('#firstName').val(),
        'lastName': userFormId.find('#lastName').val(),
        'age': userFormId.find('#age').val(),
        'email': userFormId.find('#email').val(),
        'password': userFormId.find('#password').val(),
        'roles': userFormId.find('#roles').val().map(roleId => parseInt(roleId))
    };
    console.log(JSON.stringify(user["roles"]));
    let request = new Request('/api/users/', {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(user)
    });

    fetch(request)
        .then(function (response) {
            if (response.status === 404) {
                response.text().then((value) => console.warn("Error message: " + value));
                userFormId.modal('hide');
                return false;
            }

            response.json().then(function (userData) {
                console.log(userData);

                if (response.status === 409) {
                    userData.fieldErrors.forEach(error => {
                        userFormId.find('#' + error.field)
                            .addClass('is-invalid')
                            .parent().append($('<div class="invalid-feedback">').text(error.defaultMessage));
                    });
                    console.warn('Error: ' + userData.message);
                    return false;
                }
                if (response.status === 400) {
                    userFormId.find('#email')
                        .addClass('is-invalid')
                        .parent().append($('<div class="invalid-feedback">').text('E-mail must be unique'));
                    console.warn("Error message: " + userData.message);
                    return false;
                }

                $('#userData\\[' + userData.id + '\\]\\[firstName\\]').text(userData.firstName)
                $('#userData\\[' + userData.id + '\\]\\[lastName\\]').text(userData.lastName)
                $('#userData\\[' + userData.id + '\\]\\[age\\]').text(userData.age)
                $('#userData\\[' + userData.id + '\\]\\[email\\]').text(userData.email)
                $('#userData\\[' + userData.id + '\\]\\[roles\\]').text(userData.roles.map(role => role.name));
                userFormId.modal('hide');

                console.info("User with id = " + id + " was updated");
            });
        })
        .catch(function (err) {
            console.error('Fetch Error :-S', err);
        });
}


function updateWord(id) {
    console.log("мы хотябы зашли в its.js в метод updateWord(id), а id = " + id);
    _eraseWordModalForm();

    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    let word = {
        'id': parseInt(wordFormId.find('#id').val()),
        'russianName': wordFormId.find('#russianName').val(),
        'englishName': wordFormId.find('#englishName').val(),
        'popular': wordFormId.find('#popular').val()
    };
    let request = new Request('/api/words/', {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(word)
    });

    fetch(request)
        .then(function (response) {
            if (response.status === 404) {
                response.text().then((value) => console.warn("Error message: " + value));
                wordFormId.modal('hide');
                return false;
            }

            response.json().then(function (wordData) {
                console.log(wordData);
                if (response.status !== 200) {
                    console.log("ошибичка в its.js в методе updateWord...");
                }
                /*
                if (response.status === 409) {
                    wordData.fieldErrors.forEach(error => {
                        wordFormId.find('#' + error.field)
                            .addClass('is-invalid')
                            .parent().append($('<div class="invalid-feedback">').text(error.defaultMessage));
                    });
                    console.warn('Error: ' + wordData.message);
                    return false;
                }
                if (response.status === 400) {
                    wordFormId.find('#email')
                        .addClass('is-invalid')
                        .parent().append($('<div class="invalid-feedback">').text('E-mail must be unique'));
                    console.warn("Error message: " + userData.message);
                    return false;
                }
                */
                $('#wordData\\[' + wordData.id + '\\]\\[russianName\\]').text(wordData.russianName)
                $('#wordData\\[' + wordData.id + '\\]\\[englishName\\]').text(wordData.englishName)
                $('#wordData\\[' + wordData.id + '\\]\\[popular\\]').text(wordData.popular)
                wordFormId.modal('hide');

                console.info("Word with id = " + id + " was updated");
            });
        })
        .catch(function (err) {
            console.error('Fetch Error :-S', err);
        });
    console.log("а тут спокойно вышли!");
}

function loadUserAndShowModalForm(id, editMode = true) {
    _eraseUserModalForm();

    fetch('/api/users/' + id, {method: 'GET'})
        .then(function (response) {
                if (response.status !== 200) {
                    console.error('Looks like there was a problem. Status Code: ' + response.status);
                    if (response.status === 400) {
                        response.text().then((value) => console.warn("Error message: " + value));
                    }
                    return;
                }
                response.json().then(function (user) {
                    // console.log(user);
                    userFormId.find('#id').val(id);
                    userFormId.find('#firstName').val(user.firstName);
                    userFormId.find('#lastName').val(user.lastName);
                    userFormId.find('#age').val(user.age);
                    userFormId.find('#email').val(user.email);
                    userFormId.find('#password').val('');
                    if (editMode) {
                        userFormId.find('.modal-title').text('Edit user');
                        userFormId.find('#password-div').show();
                        userFormId.find('.submit').text('Edit').removeClass('btn-danger').addClass('btn-primary')
                            .removeAttr('onClick')
                            .attr('onClick', 'updateUser(' + id + ');');
                        _setReadonlyAttr(false);
                    } else {
                        userFormId.find('.modal-title').text('Delete user');
                        userFormId.find('#password-div').hide();
                        userFormId.find('.submit').text('Delete').removeClass('btn-primary').addClass('btn-danger')
                            .removeAttr('onClick')
                            .attr('onClick', 'deleteUser(' + id + ');');
                        _setReadonlyAttr();
                    }

                    fetch('/api/roles').then(function (response) {
                        if (response.ok) {
                            userFormId.find('#roles').empty();
                            response.json().then(roleList => {
                                roleList.forEach(role => {
                                    userFormId.find('#roles')
                                        .append($('<option>')
                                            .prop('selected', user.roles.filter(e => e.id === role.id).length)
                                            .val(role.id).text(role.name));
                                });
                            });
                        } else {
                            console.error('Network request for roles.json failed with response ' + response.status + ': ' + response.statusText);
                        }
                    });

                    userFormId.modal();
                });
            }
        )
        .catch(function (err) {
            console.error('Fetch Error :-S', err);
        });
}

function _eraseWordModalForm() {
    wordFormId.find('.invalid-feedback').remove();
    wordFormId.find('#russianName').removeClass('is-invalid');
    wordFormId.find('#englishName').removeClass('is-invalid');
    wordFormId.find('#popular').removeClass('is-invalid');
}

function loadWordAndShowModalForm(id, editMode = true) {
    console.log("была нажата какая-то кнопка (edit/delete)");

    //_eraseWordModalForm();
    console.log("перед fetch");
    fetch('/api/words/' + id, {method: 'GET'})
        .then(function (response) {
                if (response.status !== 200) {
                    console.error('Looks like there was a problem. Status Code: ' + response.status);
                    if (response.status === 400) {
                        response.text().then((value) => console.warn("Error message: " + value));
                    }
                    return;
                }
                response.json().then(function (word) {
                    console.log(word);
                    console.log("это мы достали из бд это слово!");
                    wordFormId.find('#id').val(id);
                    wordFormId.find('#russianName').val(word.russianName);
                    wordFormId.find('#englishName').val(word.englishName);
                    wordFormId.find('#popular').val(word.popular);
                    if (editMode) {
                        console.log("создаем кнопку edit и вешаем на нее функцию updateWord(id)");
                        wordFormId.find('.modal-title').text('Edit word');
                        wordFormId.find('.submit').text('Edit').removeClass('btn-danger').addClass('btn-primary')
                            .removeAttr('onClick')
                            .attr('onClick', 'updateWord(' + id + ');');
                        _setReadOnlyAttrForWord(false);
                    } else {
                        console.log("создаем кнопку delete и вешаем на нее функцию deleteWord(id)");
                        wordFormId.find('.modal-title').text('Delete word');
                        wordFormId.find('.submit').text('Delete').removeClass('btn-primary').addClass('btn-danger')
                            .removeAttr('onClick')
                            .attr('onClick', 'deleteWord(' + id + ');');
                        _setReadOnlyAttrForWord();
                    }
                    wordFormId.modal();
                });
            }
        )
        .catch(function (err) {
            console.error('Fetch Error :-S', err);
        });
}

function _eraseUserAddForm() {
    userAddFormId.find('.invalid-feedback').remove();
    userAddFormId.find('#newfirstName').removeClass('is-invalid');
    userAddFormId.find('#newage').removeClass('is-invalid');
    userAddFormId.find('#newemail').removeClass('is-invalid');
    userAddFormId.find('#newpassword').removeClass('is-invalid');
}

function loadUserForInsertForm() {
    _eraseUserAddForm();
    userAddFormId.find('#newfirstName').val('');
    userAddFormId.find('#newlastName').val('');
    userAddFormId.find('#newage').val('0');
    userAddFormId.find('#newemail').val('');
    userAddFormId.find('#newpassword').val('');

    fetch('/api/roles').then(function (response) {
        if (response.ok) {
            userAddFormId.find('#newroles').empty();
            response.json().then(roleList => {
                roleList.forEach(role => {
                    userAddFormId.find('#newroles')
                        .append($('<option>').val(role.id).text(role.name));
                });
            });
        } else {
            console.error('Network request for roles.json failed with response ' + response.status + ': ' + response.statusText);
        }
    });
}

function insertUser() {
    _eraseUserAddForm();

    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    let user = {
        'firstName': userAddFormId.find('#newfirstName').val(),
        'lastName': userAddFormId.find('#newlastName').val(),
        'age': userAddFormId.find('#newage').val(),
        'email': userAddFormId.find('#newemail').val(),
        'password': userAddFormId.find('#newpassword').val(),
        'roles': userAddFormId.find('#newroles').val().map(roleId => parseInt(roleId))
    };
    let request = new Request('/api/users/', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(user)
    });

    fetch(request)
        .then(function (response) {
            response.json().then(function (userData) {
                console.log(userData);

                if (response.status === 409) {
                    userData.fieldErrors.forEach(error => {
                        userAddFormId.find('#new' + error.field)
                            .addClass('is-invalid')
                            .parent().append($('<div class="invalid-feedback">').text(error.defaultMessage));
                    });
                    console.warn('Error: ' + userData.message);
                    return false;
                }
                if (response.status === 400) {
                    userAddFormId.find('#newemail')
                        .addClass('is-invalid')
                        .parent().append($('<div class="invalid-feedback">').text('E-mail must be unique'));
                    console.warn("Error message: " + userData.message);
                    return false;
                }

                loadUsersTable();
                console.info("User with id = " + userData.id + " was inserted");
            });
        });
}

function deleteUser(id) {
    fetch('/api/users/' + id, {method: 'DELETE'})
        .then(function (response) {
            userFormId.modal('hide');
            if (response.status === 404 || response.status === 400) {
                response.text().then((value) => console.warn("Error message: " + value));
                return;
            }
            usersTableId.find('#userRow\\[' + id + '\\]').remove();
            console.info("User with id = " + id + " was deleted");
        });
}

function deleteWord(id) {
    fetch('/api/words/' + id, {method: 'DELETE'})
        .then(function (response) {
            wordFormId.modal('hide');
            if (response.status === 404 || response.status === 400) {
                response.text().then((value) => console.warn("Error message: " + value));
                return;
            }
            wordsTableId.find('#wordRow\\[' + id + '\\]').remove();
            console.info("User with id = " + id + " was deleted");
        });
}

function insertWord() {
    _eraseWordAddForm();

    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    let word = {
        'russianName': wordAddFormId.find('#newRussianName').val(),
        'englishName': wordAddFormId.find('#newEnglishName').val(),
        'popular': wordAddFormId.find('#newPopular').val()
    };
    let request = new Request('/api/words/', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(word)
    });

    fetch(request)
        .then(function (response) {
            response.json().then(function (wordData) {
                if (response.status === 409) {
                    wordData.fieldErrors.forEach(error => {
                        wordAddFormId.find('#new' + error.field)
                            .addClass('is-invalid')
                            .parent().append($('<div class="invalid-feedback">').text(error.defaultMessage));
                    });
                    console.warn('Error: ' + wordData.message);
                    return false;
                }
                if (response.status === 400) {
                    wordAddFormId.find('#newEnglishWord')
                        .addClass('is-invalid')
                        .parent().append($('<div class="invalid-feedback">').text('English word must be unique'));
                    console.warn("Error message: " + wordData.message);
                    return false;
                }
                loadWordsTable();
                console.info("Word with id = " + wordData.id + " was inserted");
            });
        });
}

$(document).ready(
    () => {
        getAllUsers();
        initNavigation();
    }
);