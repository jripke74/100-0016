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

// REMOVE ELEMENTS
// 1. Select the element that should be removed

const firstH1Element = document.querySelector('h1');

// 2. Remove it!

firstH1Element.remove(firstH1Element);

//firstH1Element.parentElement.removeChild(firstH1Element); // alternative use in older browser

// MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);
