
const example1Span = document.querySelector('#example-1 span');

example1Span.textContent = localStorage.getItem('example-1-number') ?? 0;

document.querySelector('#example-1 button').addEventListener('click', function() {
  example1Span.textContent++;

    localStorage.setItem('example-1-number', example1Span.textContent);
});

const example2Span = document.querySelector('#example-2 span');

example2Span.textContent = localStorage.getItem('example-2-number') ?? 0;

document.querySelector('#example-1 button').addEventListener('click', function() {
  example2Span.textContent--;

    localStorage.setItem('example-2-number', example1Span.textContent);
});



