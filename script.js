
// const example1Span = document.querySelector('#example-1 span');

// example1Span.textContent = localStorage.getItem('example-1-number') ?? 0;

// document.querySelector('#example-1 button').addEventListener('click', function() {
//   example1Span.textContent++;

//     localStorage.setItem('example-1-number', example1Span.textContent);
// });

// const example2Span = document.querySelector('#example-2 span');

// example2Span.textContent = localStorage.getItem('example-2-number') ?? 0;

// document.querySelector('#example-1 button').addEventListener('click', function() {
//   example2Span.textContent--;

//     localStorage.setItem('example-2-number', example1Span.textContent);
// });

// example3.textContent = localStorage.getItem('example-3-number')
// const example3 = document.querySelector('#example-3 input');
// example3.value = localStorage.getItem('example-3-input')
//     example3.addEventListener('input', function () {
  
// })

const darkTheme = document.querySelector('input');


darkTheme.checked = +localStorage.getItem('dark-theme');
document.body.classList.toggle('dark-theme', darkTheme.checked);

darkTheme.addEventListener('change', function() {
localStorage.setItem('dark-theme', +darkTheme.checked)
 document.body.classList.toggle('dark-theme'); 
})



