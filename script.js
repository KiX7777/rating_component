'use strict';

const circle = document.querySelectorAll('.circle');

const changeActive = (e) => {
  e.preventDefault();
  circle.forEach((krug) => {
    krug.classList.remove('activeBtn');
  });
  e.currentTarget.classList.add('activeBtn');
};

circle.forEach((krug) => {
  krug.addEventListener('click', changeActive);
});

const submit = function () {
  const activeBtn = document.querySelector('.activeBtn');
  document.body.innerHTML = `
  <div class="container flex ty">
    <span class="image"
      ><img src="/images/illustration-thank-you.svg" alt=""
    /></span>
    <span class="selection">You selected ${activeBtn.textContent} out of 5</span>
    <div class="text flex ty">
      <h3>Thank you!</h3>
      <p class="description ty">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  </div>`;
};
