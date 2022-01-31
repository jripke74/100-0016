let h1 = document.body.children[0];
console.log(h1.nextSibling.nextSibling);

// let headingOne = document.getElementById('main-heading');
// let secondP = document.querySelector('#second-p');
// console.log(secondP);
// secondP.textContent = 'changed!!!';

// let anchorElement = document.getElementById('external-link');
// anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('a');
anchorElement.href = 'https://jeffripke.com';

// ADD AN ELEMENT
// 1. Creae the new element

const newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google';

// 2. Get access to the parent element that should hold the new element

const firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent elelment content

firstParagraph.append(newAnchorElement);
