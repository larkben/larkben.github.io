const btn = document.getElementsByClassName("btnSite")[0];
// Problem was fixed with [0]

const WORD = document.getElementById('words');
const WORDS2 = document.getElementById('words2');

const black = '0,0,0';
const white = '255,255,255';

let isblack = true;

btn.addEventListener('click', () => {
    if (isblack === true) {
        document.body.style.backgroundColor = `rgb(${white})`;
        // String Interpolation
        isblack = false;
        WORD.style.color = `rgb(${black})`;
        WORDS2.style.color = `rgb(${black})`;
    }
    else {
        document.body.style.backgroundColor = `rgb(${black})`
        isblack = true;
        WORD.style.color = `rgb(${white})`;
        WORDS2.style.color = `rgb(${black})`;
    }
});
