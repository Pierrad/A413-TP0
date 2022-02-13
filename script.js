// functions
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Events
let inputEvent = new CustomEvent("isSubmitable");

// Selectors
const launcherSelector = document.getElementById("launcher");
const rightPanelSelector = document.getElementById('right');
const leftPanelSelector = document.getElementById('left');
const rightChevronSelector = document.getElementById("rightChevron");
const mailInput = document.getElementById("mail");
const fnInput = document.getElementById("firstname");
const lnInput = document.getElementById("lastname");
const submitInput = document.getElementById("submit");
const spinnerSelector = document.getElementById("spinner");
const submitLabel = document.getElementById("buttonText");

// Rules
submitInput.disabled = true;

// Event listener
mailInput.addEventListener('input', function () {
  if(validateEmail(this.value)) {
    this.classList.add("true");
    this.classList.remove("false");
    document.dispatchEvent(inputEvent);
  } else {
    this.classList.add("false");
    this.classList.remove("true");
  }
});

fnInput.addEventListener('input', function() {
  document.dispatchEvent(inputEvent);
})

lnInput.addEventListener('input', function() {
  document.dispatchEvent(inputEvent);
})

document.addEventListener('isSubmitable', function () {
  if (validateEmail(mailInput.value) && fnInput.value !== '' && lnInput.value !== '') {
    submitInput.disabled = false;
  } else {
    submitInput.disabled = true;
  }
});

submitInput.addEventListener('click', function () {
  submitLabel.classList.add("hidden");
  spinnerSelector.classList.remove("hidden");
  setTimeout(() => {
    submitLabel.classList.remove("hidden");
    spinnerSelector.classList.add("hidden");

    submitLabel.innerText = 'Sent !';
  }, 5000);
});

launcherSelector.addEventListener('click', function () {
  launcherSelector.classList.add('hidden');
  leftPanelSelector.classList.remove('leftCenter');
  leftPanelSelector.classList.add('leftNotCentered');
  rightPanelSelector.classList.remove('rightHidden');
  rightPanelSelector.classList.add('rightVisible');
  rightChevronSelector.classList.remove('right_chevron_left');
  rightChevronSelector.classList.add('right_chevron_right');
});

rightChevronSelector.addEventListener('click', function () {
  if (leftPanelSelector.classList.contains('leftCenter')) {
    launcherSelector.classList.add('hidden');
    leftPanelSelector.classList.remove('leftCenter');
    leftPanelSelector.classList.add('leftNotCentered');
    rightPanelSelector.classList.remove('rightHidden');
    rightPanelSelector.classList.add('rightVisible');
    rightChevronSelector.classList.remove('right_chevron_left');
    rightChevronSelector.classList.add('right_chevron_right');
  } else {
    leftPanelSelector.classList.add('leftCenter');
    leftPanelSelector.classList.remove('leftNotCentered');
    rightPanelSelector.classList.add('rightHidden');
    rightPanelSelector.classList.remove('rightVisible');
    rightChevronSelector.classList.add('right_chevron_left');
    rightChevronSelector.classList.remove('right_chevron_right');
  }
});
