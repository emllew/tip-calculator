const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

let tipPerPerson = document.querySelector('.tipPerPerson');
let totalPerPerson = document.querySelector('.totalPerPerson');

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  value.percent = data.get('percent');
  console.log({ value });
  console.log(value.bill);
  let bill = value.bill;
  let percent = value.percent;
  let people = value.noOfPeople;
  tipCalc(bill, percent, people);
}

function tipCalc(bill, percent, people) {
  let tip = ((bill / 100) * percent).toFixed(2);
  let tipsEach = tip / people;
  let totalBillEach = bill / people;
  tipPerPerson.textContent = '£' + tip;
  totalPerPerson.textContent = '£' + (totalBillEach + tipsEach).toFixed(2);
}
