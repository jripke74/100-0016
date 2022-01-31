const paragraphElement = document.querySelector('p');

function changeParagraphText() {
  paragraphElement.textContent = 'Clicked';
  console.log('paragraph clicked!');
}

paragraphElement.addEventListener('click', changeParagraphText);
