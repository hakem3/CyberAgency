const emailInput = document.getElementById('emailInput');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
  const email = emailInput.value;
  alert('Email submitted: ' + email);
  // Do something with the email
});
