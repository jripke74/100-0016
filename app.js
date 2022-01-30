let h1 = document.body.children[0];
console.log(h1.nextSibling.nextSibling);

let headingOne = document.getElementById('main-heading');
let secondP = document.querySelector('#second-p');
console.log(secondP);
secondP.textContent = 'changed!!!';

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('a');
anchorElement.href = 'https://jeffripke.com';
