let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}


let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  trasitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTiming: 'ease',
}

let revealContainers = document.querySelectorAll('.reveal');

const revealItem = () => {
  for (let i = 0; i < revealContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let revealContainerTop = revealContainers[i].getBoundingClientRect().top;
    if (revealContainerTop < windowHeight - animation.revealDistance) {
  revealContainers[i].classList.add('active'); 
} else {
  revealContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealItem);




///petition///
const signButton = document.getElementById('sign-button');

const addSignature = (person) => {
    
   let newSignature = document.createElement('p');
  newSignature.textContent = person.fName + " " + person.lName + " from " + person.town + " has signed!";

  let signatureSection = document.getElementById('signature');

  console.log(newSignature);

  signatureSection.appendChild(newSignature);
     
}

const validateForm = () => { // WILL BE CHANGED FOR FINAL STEP//

  let containsErrors = false;

  let petitionInputs = document.getElementById("form-petition").elements;
  
  let person = {
      fName: petitionInputs[0].value,
      lName: petitionInputs[1].value,
      town: petitionInputs[2].value,
  }
    
  for (let i = 0; i < petitionInputs.length; i++) {
    
    if (person.fName.length < 1) { 
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error')
    }
  }

  if (containsErrors == false) {
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = '';
      containsErrors = false;
    }
  }
}



const toggleModal = (person) => {
  modal = document.getElementById("thanks-modal")
  modalContent = document.getElementById("thanks-modal-content")
  
  modal.style.display = "flex";
  modalContent.textContent = "Thank you " + person.fName + " " + person.lName + " for signing our petition! You are helping women everywhere! 😊" 

    setTimeout(() => {
      modal.style.display = "none";
    }, 5000)
  
}

signButton.addEventListener('click', validateForm);
