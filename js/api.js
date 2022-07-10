const url = 'https://type.fit/api/quotes';
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

export async function getDataEn() {
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
};

export async function getDataRu() {
    const quotes = './js/dataRU.json';
    const res = await fetch(quotes);
    const data = await res.json();
    showData(data);
};

let showData = (data) => {
    let randomNum = Math.floor(Math.random() * data.length);
    quote.textContent = data[randomNum].text;
    author.textContent = data[randomNum].author;
};