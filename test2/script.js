var passwordInput = document.getElementById('input1');
var passwordStrength = document.getElementById('result');
var weak = document.getElementById("empt1")
var medium = document.getElementById("empt2")
var strong = document.getElementById("empt2")
passwordInput.addEventListener('input', function() {
  var password = passwordInput.value;
  var strength = '';

  if (password.length < 4) {
    strength = 'Weak';
    weak.style.backgroundColor='red'
  } else if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[!@#$]/)) {
    strength = 'Strong';
    strong.style.backgroundColor='green'
  } else {
    strength = 'Medium';
    medium.style.backgroundColor='orange'
  }

  passwordStrength.innerText = 'you password is '+ strength;
});