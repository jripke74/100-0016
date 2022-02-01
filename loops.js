const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
  const userNumberImputElement = document.getElementById('user-number'); 
  const enteredNumber = userNumberImputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber += i;
  }

  const outputResultElement = document.getElementById('calculated-sum');

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);
