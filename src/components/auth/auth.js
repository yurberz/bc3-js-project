import axios from 'axios';
import validator from 'validator';
import './auth.css';
import signUp from './template/signUp.hbs';
import logOut from './template/logOut.hbs';
import { modalBackDrop } from '../modal/modalBackDrop';
import {loggedUser} from '../../data/data';


const signUpHeader = document.querySelector('#signUpHeader');
const signUpDrop = document.querySelector('#signUpDrop');
const signInHeader = document.querySelector('#signInHeader');
const signInDrop = document.querySelector('#signInDrop');
const container = document.querySelector('.modal');





const url = 'https://callboard-backend.herokuapp.com';

let user = {
    email: '',
    password: '',
};

const gatherInfo = () => {
    const mistakeEmail = authForm.querySelector('.mistake__email');
    const mistakePassword = authForm.querySelector('.mistake__password');
    if (validator.isEmail(authForm.email.value)) {
        return user = {
            email: authForm.email.value,
            password: authForm.password.value,
        }
    }else { mistakeEmail.textContent = 'Not good email'}
};
    

const getRefs = () => {
    const refsLogging = {};
    refsLogging.authForm = document.forms.authForm;
    return refsLogging
};


// ================================SIGN UP=============================
const onHeaderSignUp = (e) => {
    modalBackDrop(signUp());

    const onXclose = () => {
        container.classList.remove('is-open');
    };
    authForm.close.addEventListener('click', onXclose);

    getRefs();

    if (e.target.dataset.btn === 'signup') {
        authForm.logIn.classList.remove('active');
        authForm.signUp.classList.add('active');
    } else if (e.target.dataset.btn === 'signin') {
        authForm.signUp.classList.remove('active');
        authForm.logIn.classList.add('active'); 
    }

    const onSubmitBtn = (e) => {
        e.preventDefault();
        gatherInfo();

        const onSignUpBtn = async (e) => {
            authForm.logIn.classList.remove('active');
            authForm.signUp.classList.add('active');
            const result = await axios.post(`${url}/auth/register`, { ...user });
            loggedUser.signUpUser = { ...result.data };
            // loggedUser.isAuth = true;
            console.log(loggedUser.signUpUser);
            // onLogInBtn();
            // container.classList.remove('is-open');
        };

        const onLogInBtn = async (e) => {
            authForm.signUp.classList.remove('active');
            authForm.logIn.classList.add('active'); 
            const result = await axios.post(`${url}/auth/login`, { ...user });
            loggedUser.logInUser = { ...result.data.user }
            localStorage.setItem('accessToken', JSON.stringify(result.data.accessToken));
            loggedUser.accessToken = result.data.accessToken;
            loggedUser.isAuth = true;
            console.log(loggedUser);
            container.classList.remove('is-open');
         };
        authForm.signUp.addEventListener('click', onSignUpBtn);
        authForm.logIn.addEventListener('click', onLogInBtn);
    };
    authForm.addEventListener('submit', onSubmitBtn );
};


signUpHeader.addEventListener('click', onHeaderSignUp);
signUpDrop.addEventListener('click', onHeaderSignUp);
signInHeader.addEventListener('click', onHeaderSignUp);
signInDrop.addEventListener('click', onHeaderSignUp);

// ==================END=============================================

