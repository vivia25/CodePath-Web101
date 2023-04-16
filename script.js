let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);

const signNowButton = document.querySelector("#sign-now-button");

const addSignature = () => {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const hometownInput = document.getElementById("Htown");

    const name = nameInput.value;
    const emailEntered = emailInput.value;
    const hometown = hometownInput.value;

    const signature = document.createElement("p");
    signature.innerHTML = "🖊️ " + name + " from " + hometown + " supports this."
    
    const signatures = document.querySelector(".signatures");
    signatures.appendChild(signature);
  
    // Counter logic
    let count = 3;
    const counter = document.querySelector("#counter");
    if (counter) {
      count = parseInt(counter.innerText.split(" ")[1]); // extract current count
      counter.remove(); // remove current counter
    }
    count++; // increase count
    const newCounter = document.createElement("p");
    newCounter.id = "counter";
    newCounter.innerText = "🖊️ " + count + " have signed up to support this cause!";
    signatures.appendChild(newCounter); // append new counter
}

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  const email = document.getElementById('email');
  
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    }
    else {
      petitionInputs[i].classList.remove('error');
    }

    if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
    }
    else {
      email.classList.remove('error');
    }
  }

  if (containsErrors == false) {
    addSignature();

    for(let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }

}

signNowButton.addEventListener('click', validateForm);