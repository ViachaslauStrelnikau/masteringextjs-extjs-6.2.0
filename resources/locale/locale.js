function loadTranslations(){

    var lang = localStorage ? (localStorage.getItem('user-lang') || 'ru') : 'ru';
    file = 'resources/locale/' + lang + '.js';
    document.write('<script type="text/javascript" src="' + file + '"></script>');
}

loadTranslations();