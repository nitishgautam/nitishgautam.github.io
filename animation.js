const text = document.querySelector('.fname');
const str = text.textContent;
const split = str.split('');
console.log(split);
text.textContent="";



for(let i =0; i<split.length; i++){
    text.innerHTML +="<span>" + split[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    span.classList.add('fadea');
    char++
    if(char === split.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}