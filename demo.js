const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputElement.maxLength;

remainingCharsElement.style.color = 'rgb(0, 255, 0)';

function updateRemainingCharactors(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    remainingCharsElement.classList.add('error');
    productNameInputElement.classList.add('error');
  } else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add('warning');
    productNameInputElement.classList.add('warning');
    remainingCharsElement.classList.remove('error');
    productNameInputElement.classList.remove('error');
  } else {
    remainingCharsElement.classList.remove('warning');
    productNameInputElement.classList.remove('warning');
  }
}

productNameInputElement.addEventListener('input', updateRemainingCharactors);
