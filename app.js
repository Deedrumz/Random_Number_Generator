let randomNumber = Math.ceil(Math.random() * 20);

const refreshButton = document.querySelector('.btn')

let h2 = document.querySelector('h2')


function refreshPage() {
   
    h2.textContent = randomNumber;
    location.reload()

}

if (randomNumber < 20) {
    h2.textContent = randomNumber;

} else {
    h2.textContent = randomNumber;
}

refreshButton.addEventListener('click', refreshPage); 



