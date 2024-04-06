const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const container = document.querySelector('.container');
signInBtnLink.addEventListener('click', () => {
    container.classList.toggle('active');
});

signUpBtnLink.addEventListener('click', () => {
    container.classList.toggle('active');
});
