import i18Obj from './translate.js';
import { getDataEn } from './api.js';
import { getDataRu } from './api.js';

const langContain = document.querySelector('.buttons');
const langButtons = document.querySelectorAll('.btn');
const button = document.querySelector('.btn-next');
let language = 'en';

getDataEn();

const changeClassActive = e => {
    langButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.toggle('active');
};

const changeLang = language => {
    const items = document.querySelectorAll('[data-i18]');
    items.forEach(elem => {
        const getData = Object.keys(i18Obj[language])
            .find(item => item === elem.dataset.i18);
        if (getData) {
            elem.textContent = i18Obj[language][elem.dataset.i18]
        }
    })
};

const changeStyles = () => {
    const rectangle = document.querySelector('.rectangle');
    const author = document.querySelector('.author');
    const blockquote = document.querySelector('.blockquote');

    rectangle.classList.toggle('rectangle-purple');
    author.classList.toggle('author-purple');
    blockquote.classList.toggle('blockquote-purple');
    button.classList.toggle('btn-another');
};

langContain.addEventListener('click', e => {
    if (e.target.dataset.lang === 'en') {
        language = 'en';
        changeClassActive(e);
        changeLang(language);
        getDataEn();
    }
    else if (e.target.dataset.lang === 'ru') {
        language = 'ru';
        changeClassActive(e);
        changeLang(language);
        getDataRu();
    }
});

button.addEventListener('click', e => {
    if (language === 'en') {
        getDataEn();
        changeStyles();
    }
    else if (language === 'ru') {
        getDataRu();
        changeStyles();
    }
});