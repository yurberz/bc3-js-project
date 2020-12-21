import axios from 'axios';
import validator from 'validator';
import './auth.css';
import signUp from './template/signUp.hbs';
import logOut  from './template/logOut.hbs';

const authWrapRef = document.querySelector('.auth__wrap');
// const logOutWrapRef = document.querySelector('.logOut__wrap');

// =========SIGN UP========================================

authWrapRef.innerHTML = signUp();


const refs = {
    authForm: document.forms.authForm,
    clsBtn: authForm.elements.close,
    authFormBtnSignUp: authForm.querySelector('.authForm__btn_signUp'),
    authFormBtnLogIn: authForm.querySelector('.authForm__btn_logIn'),
    authFormInput:authForm.querySelectorAll('.authForm__input'),
};

const url = 'https://callboard-backend.herokuapp.com';

const user = {
    email: '',
    password: '',
};

let accesTocken = "";

let logInUser ={
  email: '',
  id: '',
  favorites: [],
  calls: [],
  registrationDate: '',
};

let signUpUser = {
    email: '',
    id: '',
    registrationDate: '',
};


const gatherInfo = (e) => {
    if (validator.isEmail(authForm.elements.email.value)) {
       user[e.target.name] = e.target.value;
    }
    return user;
};

const onSignUpBtn = async () => {
    try {
        const result = await axios.post(`${url}/auth/register`, { ...user });
        signUpUser = { ...result.data };
    } catch (error) {
        throw error;
    } finally {
        console.log('signUpUser', signUpUser);
    };
};

const onLogInBtn = async () => {
    const result = await axios.post(`${url}/auth/login`, { ...user });
    logInUser = {...result.data.user}
    localStorage.setItem('accessToken', JSON.stringify(result.data.accessToken));
    accesTocken = localStorage.getItem('accessToken');
}

const submitHandler = e => {
    e.preventDefault();
    refs.authForm.addEventListener('input', gatherInfo);
    refs.authFormBtnSignUp.addEventListener('click', onSignUpBtn);
    refs.authFormBtnLogIn.addEventListener('click', onLogInBtn);
};

const clsModal = () => {
    console.log('close');
};

refs.authForm.addEventListener('submit', submitHandler);
refs.authForm.addEventListener('input', gatherInfo);
refs.clsBtn.addEventListener('click', clsModal )

// ==================SIGN OUT========================

const logOutWrapRef = document.querySelector('.logOut__wrap');

logOutWrapRef.innerHTML = logOut();

const refsOut = {
    authFormBtnLogOut: logOutWrapRef.querySelector('.authForm__btn_logOut'),
    authFormBtnExit: logOutWrapRef.querySelector('.authForm__btn_exit'),
    authFormBtnCls: logOutWrapRef.querySelector('.authForm__btn_cls'),
};


const onLogoutBtn = () => {
    if (localStorage.getItem('accessToken')) {
        console.log(localStorage);
        localStorage.removeItem('accessToken');
    };
    clsModal();
};

const clsModalOut = () => {
    console.log('close');
};

refsOut.authFormBtnLogOut.addEventListener('click', onLogoutBtn);
refsOut.authFormBtnExit.addEventListener('click', clsModalOut);
refsOut.authFormBtnCls.addEventListener('click', clsModalOut);



