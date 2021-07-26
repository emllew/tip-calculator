const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

let tipPerPerson = document.querySelector('.tipPerPerson');
let totalPerPerson = document.querySelector('.totalPerPerson');

let numberOfPeople = document.querySelector('.numberOfPeople');
let bill = document.querySelector('.bill');

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', reset);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  value.percent = data.get('percent');
  let bill = value.bill;
  let percent = value.percent;
  let people = value.noOfPeople;

  if (people == 0) {
    const cantBeZero = document.createElement('h2');
    cantBeZero.setAttribute('class', 'CBZ');
    cantBeZero.innerText = "Can't be zero";
    numberOfPeople.appendChild(cantBeZero);
  } else {
    const cantBeZero = document.querySelector('.CBZ');
    if (document.body.contains(cantBeZero)) {
      numberOfPeople.removeChild(cantBeZero);
    }
    tipCalc(bill, percent, people);
  }
}

function reset() {
  tipPerPerson.textContent = '£0.00';
  totalPerPerson.textContent = '£0.00';
  form.reset();
}

function tipCalc(bill, percent, people) {
  let tip = ((bill / 100) * percent).toFixed(2);
  let tipsEach = tip / people;
  let totalBillEach = bill / people;
  tipPerPerson.textContent = '£' + tipsEach.toFixed(2);
  totalPerPerson.textContent = '£' + (totalBillEach + tipsEach).toFixed(2);
}
