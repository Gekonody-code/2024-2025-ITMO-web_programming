const availableLanguages = ['ru','en','es','pt','ch']

const language = process.argv[2];

if (language && !availableLanguages.includes(language)) {
    console.error('Язык не поддерживается');
}

const greetingFilePath = `./greeting_${language}.js`;

import (greetingFilePath).then(({default: result}) => {console.log(result)});