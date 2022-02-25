console.log(`WARSZTAT - Walidacja formularza zapisu do Newsletter'a`);

let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko!';
        errors.appendChild(liError);
        // console.log(`Wpisz imię i nazwisko!`);
    }

    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail!';
        errors.appendChild(liError);
        // console.log(`Wpisz imię i nazwisko!`);
    }

    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać @';
        errors.appendChild(liError);
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś Zgody 1!';
        errors.appendChild(liError);
        // console.log(`Wpisz imię i nazwisko!`);
    }

    console.log(errors.children.length);

    if (errors.children.length > 0) {
        event.preventDefault();

    }
    // console.log(errors);
}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
    // console.log(event.target.checked);
}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);