let numberAdvice = document.querySelector('.number-advice');
let quote = document.querySelector('.quote');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {

  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      let adviceId = data.slip.id;
      let newAdvice = data.slip.advice;
      console.log(newAdvice)

      numberAdvice.textContent = ` Advice #${adviceId}`;
      quote.textContent = `"${newAdvice}"`;
    })
    .catch(function (error) {
      alert(error);
    })
});