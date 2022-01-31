const paragraphElement = document.querySelector('p');

function changeParagraphText() {
  paragraphElement.textContent = 'Clicked';
  console.log('paragraph clicked!');
}

paragraphElement.addEventListener('click', changeParagraphText);

const inputElement = document.querySelector('input');

function retrieveUserInput() {
  const enteredText = inputElement.value;
  console.log(enteredText);
}

inputElement.addEventListener('input', retrieveUserInput);
