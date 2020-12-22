import axios from 'axios';
import validator from 'validator';
import './auth.css';
import signUp from './template/signUp.hbs';
import logOut from './template/logOut.hbs';
import { modalBackDrop } from '../modal/modalBackDrop';
import {data} from '../../data/data';


const signUpHeader = document.querySelector('#signUpHeader');
const signUpDrop = document.querySelector('#signUpDrop');
const signInHeader = document.querySelector('#signInHeader');
const signInDrop = document.querySelector('#signInDrop');

const authWrapRef = document.querySelector('.auth__wrap');
const logOutWrapRef = document.querySelector('.logOut__wrap');



const url = 'https://callboard-backend.herokuapp.com';

let user = {
    email: '',
    password: '',
};

const gatherInfo = () => {
        // if (validator.isEmail(authForm.email.value)) {
    return user = {
        email: authForm.email.value,
        password: authForm.password.value,
    }
};
    

const getRefs = () => {
    const refsLogging = {};
    refsLogging.authForm = document.forms.authForm;
    return refsLogging
};


// ================================SIGN UP=============================
const onHeaderSignUp = (e) => {
    modalBackDrop(signUp());
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
            data.signUpUser = { ...result.data };;
        };
        // console.log(data.signUpUser);

        const onLogInBtn = async (e) => {
            authForm.signUp.classList.remove('active');
            authForm.logIn.classList.add('active'); 
            const result = await axios.post(`${url}/auth/login`, { ...user });
            data.logInUser = { ...result.data.user }
            localStorage.setItem('accessToken', JSON.stringify(result.data.accessToken));
            // console.log(data.logInUser);
            // console.log(result.data.accessToken);
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

