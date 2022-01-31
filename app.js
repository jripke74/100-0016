const paragraphElement = document.querySelector('p');

function changeParagraphText() {
  paragraphElement.textContent = 'Clicked';
  console.log('paragraph clicked!');
}

paragraphElement.addEventListener('click', changeParagraphText);

const inputElement = document.querySelector('input');

function retrieveUserInput(event) {
  // const enteredText = inputElement.value;
  const enteredText = event.target.value;
  console.log(enteredText);
  console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput);
