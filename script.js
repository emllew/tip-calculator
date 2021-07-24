const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

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
  console.log(
    tip + 'this is tip' + bill + percent + people + ' this is from tipcalc'
  );
}
