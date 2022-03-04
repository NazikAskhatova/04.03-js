const span = document.querySelector('span');
setInterval(() => {
    span.textContent++;
}, 1000);

const span1 = document.querySelector('span')
const interval = setInterval(() => {
    span.textContent++;
}, 1000);
document.querySelector('button').addEventListener('click', function (){
    clearInterval(interval)
})

